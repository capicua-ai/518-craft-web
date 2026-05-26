import { AgeGate } from "@/components/craft/age-gate";
import { Grain } from "@/components/craft/grain";
import { Nav } from "@/components/craft/nav";
import { Hero } from "@/components/craft/hero";
import { BeerLineup } from "@/components/craft/beer-lineup";
import { Marquee } from "@/components/craft/marquee";
import { Story } from "@/components/craft/story";
import { FindUs } from "@/components/craft/find-us";
import { FooterCta } from "@/components/craft/footer-cta";
import { Footer } from "@/components/craft/footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Grain />
      <Nav />
      <main id="main-content" style={{ background: "var(--craft-black)" }}>
        <Hero />
        <Marquee />
        <Story />
        <BeerLineup />
        <FindUs />
        <FooterCta />
        <Footer />
      </main>
    </>
  );
}
