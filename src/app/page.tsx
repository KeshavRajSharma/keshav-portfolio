import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
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

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="section site-container section-placeholder"
        >
          <p className="section-eyebrow">Journey</p>

          <h2 id="experience-heading">Experience &amp; Activities</h2>
        </section>

        <section
          id="other-projects"
          aria-labelledby="other-projects-heading"
          className="section site-container section-placeholder"
        >
          <p className="section-eyebrow">More Work</p>

          <h2 id="other-projects-heading">Other Projects</h2>
        </section>

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
