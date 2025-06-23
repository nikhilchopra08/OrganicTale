
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Founder, TaskFlow SaaS",
    content: "This tool transformed our marketing strategy. We went from spending $5k/month on ads to getting 10x better results with authentic Reddit stories.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Mike Rodriguez",
    title: "Growth Lead, DevTools Pro",
    content: "The AI understands Reddit culture perfectly. Our stories get genuine engagement, not just upvotes. Real people asking real questions about our product.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Foster",
    title: "CMO, CloudSync",
    content: "Finally, a marketing channel that doesn't feel like marketing. Our Reddit-driven signups have the highest conversion rates of any channel.",
    rating: 5,
    avatar: "EF"
  }
];

const Testimonials = () => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Loved by SaaS Founders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Join hundreds of successful businesses already using Reddit for organic growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-slate-100 font-semibold">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
