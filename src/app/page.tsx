import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Method from "@/components/Method";
import Services from "@/components/Services";
import ClubProfit from "@/components/ClubProfit";
import Audience from "@/components/Audience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <About />
        <Philosophy />
        <Method />
        <Services />
        <ClubProfit />
        <Audience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
