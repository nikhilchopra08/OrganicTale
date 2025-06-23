'use client'

import { useEffect, useState } from 'react'
import { MessageSquare, Zap } from 'lucide-react'

const story = `Last year I was drowning in manual processes at my agency. 
I spent 3 months building what I thought was just an internal tool. 
Fast forward to today and it’s generating $50k MRR with 500+ customers...`

const FounderStory = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < story.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + story[index])
        setIndex(index + 1)
      }, 25) // Typing speed

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <div className="relative flex items-center justify-center px-4 py-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl w-full max-w-md mt-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
            <MessageSquare className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-slate-300 font-medium">r/entrepreneur</p>
            <p className="text-slate-500 text-sm">Posted 2 hours ago</p>
          </div>
        </div>

        <h3 className="text-slate-100 font-semibold text-lg mb-3">
          How I accidentally built a $50k MRR SaaS solving my own problem
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed whitespace-pre-line min-h-[100px]">
          {displayedText}
          <span className="animate-pulse text-orange-500">|</span>
        </p>

        <div className="flex items-center justify-between text-slate-500 text-sm">
          <div className="flex space-x-4">
            <span>↑ 1.2k</span>
            <span>💬 89 comments</span>
            <span>🔄 Share</span>
          </div>
          <div className="flex items-center space-x-1">
            <Zap className="h-3 w-3 text-orange-500" />
            <span className="text-orange-500 text-xs">AI Generated</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FounderStory
