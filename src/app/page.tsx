import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Experience } from "@/components/Experience";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MobileActions } from "@/components/MobileActions";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Classes />
        <Experience />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </>
  );
}
