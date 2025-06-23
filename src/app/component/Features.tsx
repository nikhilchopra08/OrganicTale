
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Story Generation",
    description: "Create compelling Reddit stories in minutes with our advanced AI that understands Reddit culture and engagement patterns."
  },
  {
    icon: Target,
    title: "Subreddit Targeting",
    description: "Smart recommendations for the best subreddits to share your stories based on your business niche and audience."
  },
  {
    icon: Shield,
    title: "Authentic & Compliant",
    description: "Stories that feel genuine and follow Reddit's community guidelines while promoting your business naturally."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Track engagement, upvotes, comments, and traffic driven to your website from each story posted."
  }
];

const Features = () => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Everything You Need for Reddit Success
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Powerful tools designed specifically for organic marketing on Reddit
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-600/20 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
                <CardTitle className="text-slate-100">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
