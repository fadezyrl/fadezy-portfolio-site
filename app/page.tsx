import type { ReactElement } from "react";
import { FadezyEffects } from "@/components/FadezyEffects";
import { Footer } from "@/components/Footer/Footer";
import { HeaderNav } from "@/components/HeaderNav/HeaderNav";
import { About } from "@/components/sections/About/About";
import { Clients } from "@/components/sections/Clients/Clients";
import { FinalCta } from "@/components/sections/FinalCta/FinalCta";
import { Hero } from "@/components/sections/Hero/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { Transformation } from "@/components/sections/Transformation/Transformation";
import { Work } from "@/components/sections/Work/Work";

const Home = (): ReactElement => {
  return (
    <>
      <HeaderNav />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Work />
        <Transformation />
        <Testimonials />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <FadezyEffects />
    </>
  );
};

export default Home;
