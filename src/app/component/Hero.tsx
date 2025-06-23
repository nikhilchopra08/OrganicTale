
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import FounderStory from "./FounderStory";

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
              <Link href={"/story"}>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg border-0">
                Start Creating Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
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
    <FounderStory/>
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
