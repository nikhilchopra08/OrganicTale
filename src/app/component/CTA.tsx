
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 px-8 py-16 text-center backdrop-blur-sm">
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl mb-4">
              Ready to Go Viral on Reddit?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Join over 500+ SaaS companies already using our platform to create authentic Reddit stories that drive real business growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={"/chat"}>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold border-0">
                Lets get started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>
          
          {/* Subtle background pattern */}
          <div 
            className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;