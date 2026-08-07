import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { OtherProjects } from "@/components/sections/other-projects";
import { SelectedWork } from "@/components/sections/selected-work";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-background text-foreground">
        <Hero />

        <About />

        <SelectedWork />

        <Skills />

        <Experience />

        <OtherProjects />

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="section site-container section-placeholder"
        >
          <p className="section-eyebrow">Get in Touch</p>

          <h2 id="contact-heading">Contact</h2>
        </section>
      </main>
    </>
  );
}
