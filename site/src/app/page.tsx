import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Reposteria from "@/components/Reposteria";
import SobreMi from "@/components/SobreMi";
import Contacto from "@/components/Contacto";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Reposteria />
      
      <SobreMi />
      <img
        src="/dividers/mask-top-slider.png"
        alt=""
        aria-hidden
        className="section-divider"
      />
      <Contacto />
    </main>
  );
}
