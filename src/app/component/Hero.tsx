
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, TrendingUp, Users, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen lg:max-h-[85vh] flex items-center px-4 py-20 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="text-left flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Turn Your Business Into
              <span className="text-orange-500">
                {" "}Reddit Gold
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
              Create authentic, engaging Reddit stories that drive organic traffic to your SaaS. 
              Build genuine connections with your target audience through compelling narratives.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg border-0">
                Start Creating Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-8 text-slate-500">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">10M+ Users Reached</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm">300% Traffic Boost</span>
              </div>
            </div>
          </div>

          {/* Right Column - Reddit Story Preview */}
          <div className="relative flex items-center justify-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-2xl w-full max-w-md">
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
                How I accidentally built a $50k MRR SaaS while trying to solve my own problem
              </h3>
              
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                Last year I was drowning in manual processes at my agency. Spent 3 months building what I thought was just an internal tool. Fast forward to today and it&apos;s generating $50k MRR with 500+ customers...
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
        </div>
      </div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-orange-600/5 blur-3xl" 
               style={{
                 clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
               }} 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
