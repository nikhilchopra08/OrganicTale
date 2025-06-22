'use client'

import { Input } from "../../component/ui/input"
import { Button } from "../../component/ui/button"
import { useChat } from "ai/react"
import { useRef, useEffect, useState } from 'react'
import { Send, BarChart2, Copy, Check, X, Leaf } from "lucide-react"

// Toast Interface
interface Toast {
    id: string
    message: string
    type: 'success' | 'error'
    copiedText?: string
}

// Enhanced Toast Interface
interface Toast {
    id: string
    message: string
    type: 'success' | 'error'
    copiedText?: string
    isExiting?: boolean
}

// Individual Toast Component
interface ToastProps {
    toast: Toast
    onClose: (id: string) => void
}

function ToastItem({ toast, onClose }: ToastProps) {
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose()
        }, 4000)

        return () => clearTimeout(timer)
    }, [toast.id])

    const handleClose = () => {
        setIsExiting(true)
        // Wait for exit animation to complete before removing from state
        setTimeout(() => {
            onClose(toast.id)
        }, 400) // Increased to match the new animation duration
    }

    const truncateText = (text: string, maxLength: number = 30) => {
        if (text.length <= maxLength) return text
        return text.substring(0, maxLength) + '...'
    }

    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform mb-2 ${
            isExiting 
                ? 'animate-slide-out' 
                : 'animate-slide-in'
        } ${
            toast.type === 'success' 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
            <div className="flex items-center gap-2 flex-1">
                {toast.type === 'success' ? (
                    <Check size={16} className="text-green-600 flex-shrink-0" />
                ) : (
                    <X size={16} className="text-red-600 flex-shrink-0" />
                )}
                <div className="flex flex-col">
                    <span className="text-sm font-medium">{toast.message}</span>
                    {toast.copiedText && (
                        <span className="text-xs opacity-75 font-mono bg-white bg-opacity-50 px-2 py-1 rounded mt-1">
                            "{truncateText(toast.copiedText)}"
                        </span>
                    )}
                </div>
            </div>
            <button
                onClick={handleClose}
                className="opacity-70 hover:opacity-100 transition-opacity flex-shrink-0"
            >
                <X size={14} />
            </button>
        </div>
    )
}

// Toast Container Component
interface ToastContainerProps {
    toasts: Toast[]
    onClose: (id: string) => void
}

function ToastContainer({ toasts, onClose }: ToastContainerProps) {
    if (toasts.length === 0) return null

    return (
        <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
            <style jsx>{`
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slide-out {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                        max-height: 200px;
                        margin-bottom: 8px;
                    }
                    to {
                        transform: translateX(-100%);
                        opacity: 0;
                        max-height: 0;
                        margin-bottom: 0;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                }
                @keyframes fade-slide-out {
                    0% {
                        transform: translateX(0);
                        opacity: 1;
                        max-height: 200px;
                        margin-bottom: 8px;
                    }
                    50% {
                        transform: translateX(-50%);
                        opacity: 0.3;
                    }
                    100% {
                        transform: translateX(-100%);
                        opacity: 0;
                        max-height: 0;
                        margin-bottom: 0;
                        padding-top: 0;
                        padding-bottom: 0;
                    }
                }
                .animate-slide-in {
                    animation: slide-in 0.3s ease-out;
                }
                .animate-slide-out {
                    animation: fade-slide-out 0.4s ease-in forwards;
                }
            `}</style>
            {/* LIFO order - newest toasts appear first (at top) */}
            {[...toasts].reverse().map((toast) => (
                <ToastItem
                    key={toast.id}
                    toast={toast}
                    onClose={onClose}
                />
            ))}
        </div>
    )
}

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: 'api/story',
        onError: (e) => {
            console.log(e)
        }
    })

    const chatParent = useRef<HTMLUListElement>(null)
    const [copiedText, setCopiedText] = useState<string | null>(null)
    const [toasts, setToasts] = useState<Toast[]>([])

    useEffect(() => {
        const domNode = chatParent.current
        if (domNode) {
            domNode.scrollTop = domNode.scrollHeight
        }
    }, [messages])

    const addToast = (message: string, type: 'success' | 'error', copiedText?: string) => {
        const newToast: Toast = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            message,
            type,
            copiedText
        }
        
        // Add new toast to the end (LIFO - Last In, First Out for display)
        setToasts(prev => [...prev, newToast])
        
        // Optional: Limit maximum number of toasts (e.g., max 5)
        setToasts(prev => prev.slice(-5))
    }

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!input.trim()) return

        await handleSubmit(e as any)
    }

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            addToast('Content copied to clipboard!', 'success', text)
            setTimeout(() => setCopiedText(null), 2000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
            addToast('Failed to copy content', 'error')
        }
    }

    const parseMessageContent = (content: string) => {
        const parts = content.split(/(\*\*[^*]+\*\*)/g)
        const result = []
        
        for (let i = 0; i < parts.length; i++) {
            const part = parts[i]
            
            if (part.startsWith('**') && part.endsWith('**')) {
                const headingText = part.slice(2, -2)
                const nextPart = parts[i + 1] || ''
                
                // Extract content within double quotes if present
                let contentText = nextPart.trim()
                let copyableText = contentText
                
                // Check if content contains quotes and extract only the quoted part
                const quotedMatch = contentText.match(/"([^"]*)"/)
                if (quotedMatch) {
                    copyableText = quotedMatch[1] // Extract content within quotes
                }
                
                const isActive = copiedText === copyableText
                
                result.push(
                    <div key={i} className="my-4 first:mt-0">
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-2">
                            <h3 className="font-semibold text-orange-600">
                                {headingText}
                            </h3>
                        </div>
                        {contentText && (
                            <div className="group relative bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                                <div className="pr-8">
                                    {contentText}
                                </div>
                                <button
                                    onClick={() => copyToClipboard(copyableText)}
                                    className="absolute top-2 right-2 opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-200 rounded text-gray-600"
                                    title={quotedMatch ? "Copy quoted content" : "Copy content"}
                                >
                                    {isActive ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        )}
                    </div>
                )
                i++ // Skip the next part since we've already processed it
            } else if (part.trim() && !parts[i - 1]?.startsWith('**')) {
                // This is regular content not following a heading
                result.push(<span key={i}>{part}</span>)
            }
        }
        
        return result
    }

    return (
        <main className="flex flex-col w-full h-screen max-h-dvh bg-gradient-to-br from-slate-50 to-gray-100">
            {/* Toast Container */}
            <ToastContainer toasts={toasts} onClose={removeToast} />

            <header className="p-5 border-b bg-orange-50 shadow-sm w-full">
                <div className="max-w-4xl mx-auto flex items-center gap-3">
                    <div className="bg-red-400 text-white p-2 rounded-lg">
                        <BarChart2 size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Business Market Analysis</h1>
                        <p className="text-gray-500">Get detailed industry insights for your business strategy</p>
                    </div>
                </div>
            </header>

            <section className="flex-grow overflow-hidden flex flex-col bg-orange-50">
                <ul ref={chatParent} className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-grow p-6 overflow-y-auto flex flex-col gap-8 max-w-4xl mx-auto w-full">
{messages.length === 0 && (
    <div className="h-full flex items-center justify-center">
        <div className="text-center p-8 rounded-xl bg-white shadow-md max-w-lg border border-gray-100">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf size={28} className="text-orange-600" />
            </div>
            <h2 className="text-2xl font-medium mb-3 text-gray-800">Organic Product Marketing</h2>
            <p className="text-gray-600 mb-5 leading-relaxed">Generate authentic Reddit stories to naturally promote your organic products. I'll create engaging narratives that subtly showcase your brand.</p>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                <p className="text-orange-500 font-medium mb-2">Try asking:</p>
                <div className="space-y-2 text-gray-700 text-sm">
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        <p>'Create a skincare transformation story'</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        <p>'Write about switching to organic food'</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-orange-500">•</span>
                        <p>'Generate a health journey success story'</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}

                    {messages.map((m) => (
                        <li key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div 
                                className={`rounded-xl shadow-md max-w-[95%] ${
                                    m.role === 'user' 
                                        ? 'bg-[#ff4400e3] text-white p-5' 
                                        : 'bg-white text-black border border-gray-100 p-5 w-full whitespace-pre-wrap'
                                }`}
                            >
                                {m.role === 'assistant' ? parseMessageContent(m.content) : m.content}
                            </div>
                        </li>
                    ))}

                    {isLoading && (
                        <li className="flex justify-start">
                            <div className="rounded-xl p-5 bg-white border border-gray-100 shadow-md w-full">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse"></div>
                                    <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse delay-150"></div>
                                    <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse delay-300"></div>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </section>

            <section className="p-6 border-t border-gray-400 bg-orange-50 shadow-md">
                <div className="flex items-center gap-3 max-w-4xl mx-auto">
                    <Input 
                        className="flex-1 py-6 px-5 rounded-full bg-gray-100 focus:bg-white border-gray-200 text-gray-800" 
                        placeholder="Which industry would you like to analyze?"
                        value={input} 
                        onChange={handleInputChange}
                        disabled={isLoading}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                if (!input.trim()) return
                                handleSubmit(e as any)
                            }
                        }}
                    />
                    <Button 
                        className="rounded-full w-14 h-14 flex items-center justify-center bg-orange-400 hover:bg-orange-600 shadow-md" 
                        onClick={(e) => {
                            e.preventDefault()
                            if (!input.trim()) return
                            handleSubmit(e as any)
                        }}
                        disabled={isLoading}
                    >
                        <Send size={20} />
                    </Button>
                </div>
            </section>
        </main>
    )
}