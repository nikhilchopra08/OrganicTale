import { Chat } from "@/app/component/chat";
import Hero from "./component/Hero";
import Features from "./component/Features";
import Benefits from "./component/Benefits";
import Testimonials from "./component/Testimonials";
import CTA from "./component/CTA";
import Footer from "./component/Footer";

export default function Home() {
  return (
   <div>
    <Chat/>

          <Hero />
      <Features />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
   </div>
  );
}
