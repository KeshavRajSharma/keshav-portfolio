import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="soft-gradient-background bg-background text-foreground">
        <section
          aria-labelledby="hero-heading"
          className="section site-container hero-placeholder"
        >
          <p>Hello, I&apos;m</p>

          <h1 id="hero-heading">Keshav Raj Sharma</h1>

          <p>Full-Stack Developer & AI/Data Science Enthusiast</p>

          <p>
            Computer Engineering student building intelligent software systems
            across full-stack development, AI, data science, IoT, and computer
            graphics.
          </p>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="section site-container"
        >
          <h2 id="projects-heading">Featured Projects</h2>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="section site-container"
        >
          <h2 id="about-heading">About Me</h2>
        </section>

        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="section site-container"
        >
          <h2 id="skills-heading">Skills</h2>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="section site-container"
        >
          <h2 id="experience-heading">Experience & Activities</h2>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="section site-container"
        >
          <h2 id="contact-heading">Contact</h2>
        </section>
      </main>
    </>
  );
}
