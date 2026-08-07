"use client";

import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />

      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="site-container hero-container">
        <div className="hero-content">
          <motion.p
            className="hero-eyebrow"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero-title"
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.06,
            }}
          >
            Keshav Raj Sharma
          </motion.h1>

          <motion.h2
            className="hero-headline"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.52,
              delay: 0.11,
            }}
          >
            Full-Stack Developer{" "}
            <span className="gradient-text">
              &amp; AI/Data Science Enthusiast
            </span>
          </motion.h2>

          <motion.p
            className="hero-role"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
          >
            Computer Engineering Student
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.19,
            }}
          >
            I build practical software by combining modern web development,
            artificial intelligence, data, and computer engineering into
            complete working systems.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.23,
            }}
          >
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowDown size={17} strokeWidth={1.9} aria-hidden="true" />
            </a>

            <a
              href="/resume/keshav-raj-sharma-resume.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} strokeWidth={1.9} aria-hidden="true" />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.28,
            }}
          >
            <a
              href="https://github.com/KeshavRajSharma"
              target="_blank"
              rel="noreferrer"
              className="hero-social-link"
              aria-label="Visit Keshav Raj Sharma on GitHub"
            >
              <SiGithub size={17} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            x: 18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.16,
          }}
          aria-hidden="true"
        >
          <div className="hero-visual-glow" />

          <div className="hero-visual-card">
            <div className="hero-card-header">
              <div className="hero-window-controls">
                <span />
                <span />
                <span />
              </div>

              <span className="hero-card-label">keshav.dev</span>
            </div>

            <div className="hero-terminal">
              <div className="hero-terminal-line">
                <span className="terminal-symbol">›</span>

                <span>profile</span>
              </div>

              <div className="hero-terminal-output">
                Computer Engineering Student
              </div>

              <div className="hero-terminal-line">
                <span className="terminal-symbol">›</span>

                <span>focus</span>
              </div>

              <div className="hero-terminal-tags">
                <span>Full Stack</span>
                <span>AI / ML</span>
                <span>Data Science</span>
              </div>

              <div className="hero-terminal-line">
                <span className="terminal-symbol">›</span>

                <span>currently</span>
              </div>

              <div className="hero-status">
                <span className="hero-status-dot" />
                Building practical software
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        aria-label="Scroll to About section"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>Scroll</span>

        <ArrowDown size={15} strokeWidth={1.8} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
