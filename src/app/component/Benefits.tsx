
import { CheckCircle } from "lucide-react";

const benefits = [
  "Generate 10x more organic traffic than traditional ads",
  "Build authentic brand awareness in relevant communities",
  "Create viral content that spreads naturally",
  "Establish thought leadership in your industry",
  "Connect with highly engaged potential customers",
  "Reduce customer acquisition costs by 60%"
];

const Benefits = () => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl mb-6">
              Why Reddit Marketing Works
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Reddit users are 3x more likely to research products mentioned in authentic stories. 
              Our platform helps you create those authentic moments that drive real business results.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                    r/
                  </div>
                  <div>
                    <h3 className="text-slate-100 font-semibold">Real Success Story</h3>
                    <p className="text-slate-500 text-sm">Posted 2 days ago</p>
                  </div>
                </div>
                <div className="text-slate-300">
                  "I was struggling with my SaaS marketing until I discovered this amazing tool for Reddit. 
                  Within a month, I went from 100 to 5,000 monthly visitors. The stories feel so authentic 
                  that people actually want to engage and learn more about my product."
                </div>
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <span>↑ 2.4k upvotes</span>
                  <span>💬 189 comments</span>
                  <span>🏆 3 awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;