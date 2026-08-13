import { Contact } from "@/components/contact/contact";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { StructuredData } from "@/components/seo/structured-data";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OtherProjects } from "@/components/sections/other-projects";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Navbar />

      <main id="main-content" className="bg-background text-foreground">
        <Hero />

        <About />

        <SelectedWork />

        <Skills />

        <Experience />

        <OtherProjects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
