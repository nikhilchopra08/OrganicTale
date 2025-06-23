import Hero from "@/app/component/Hero";
import Features from "@/app/component/Features";
import Benefits from "@/app/component/Benefits";
import CTA from "@/app/component/CTA";
import Footer from "@/app/component/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Benefits />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  );
}
