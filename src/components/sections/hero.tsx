"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

import styles from "./hero-refresh.module.css";

const focusAreas = ["Full Stack", "AI / ML", "Data Science"];

export function Hero() {
  return (
    <section
      className={`hero-section ${styles.heroSection}`}
      aria-labelledby="hero-heading"
    >
      <div className="hero-glow hero-glow-one" aria-hidden="true" />

      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className={`site-container hero-container ${styles.heroContainer}`}>
        {/* LEFT SIDE */}
        <div className={`hero-content ${styles.heroContent}`}>
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
            className={`hero-title ${styles.heroTitle}`}
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
            className={`hero-headline ${styles.heroHeadline}`}
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
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.48,
              delay: 0.16,
            }}
          >
            Computer Engineering Student
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.48,
              delay: 0.2,
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
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.48,
              delay: 0.25,
            }}
          >
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowDown size={17} strokeWidth={1.8} aria-hidden="true" />
            </a>

            <a
              href="/resume/keshav-raj-sharma-resume.pdf"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={17} strokeWidth={1.8} aria-hidden="true" />
              Resume
            </a>

            <a
              href="https://github.com/KeshavRajSharma"
              className="button button-secondary"
              target="_blank"
              rel="noreferrer"
              aria-label="Keshav Raj Sharma on GitHub"
            >
              <SiGithub size={17} aria-hidden="true" />
              GitHub
              <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          className={`hero-visual ${styles.profileVisual}`}
          initial={{
            opacity: 0,
            x: 24,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.65,
            delay: 0.14,
            ease: "easeOut",
          }}
        >
          <div className={styles.profileGlow} aria-hidden="true" />

          <div className={styles.profileCard}>
            <div className={styles.profileAccent} />

            <div className={styles.profileContent}>
              <div className={styles.photoOuter}>
                <div className={styles.photoRing}>
                  <div className={styles.photoFrame}>
                    <Image
                      src="/images/profile/keshav-profile.webp"
                      alt="Portrait of Keshav Raj Sharma"
                      width={220}
                      height={220}
                      priority
                      sizes="(max-width: 768px) 125px, 190px"
                      className={styles.profileImage}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.profileIdentity}>
                <p className={styles.profileLabel}>PROFILE</p>

                <h3 className={styles.profileName}>Keshav Raj Sharma</h3>

                <p className={styles.profileRole}>
                  Computer Engineering Student
                </p>
              </div>

              <div className={styles.divider} />

              <div className={styles.focusBlock}>
                <p className={styles.monoLabel}>
                  <span>&gt;</span> focus
                </p>

                <div className={styles.focusTags}>
                  {focusAreas.map((focus) => (
                    <span key={focus}>{focus}</span>
                  ))}
                </div>
              </div>

              <div className={styles.statusBlock}>
                <p className={styles.monoLabel}>
                  <span>&gt;</span> currently
                </p>

                <div className={styles.status}>
                  <span className={styles.statusDot} aria-hidden="true" />

                  <span>Building practical software</span>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span>keshav.dev</span>

              <span className={styles.footerStatus}>AVAILABLE TO BUILD</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll-indicator"
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-label="Scroll to About section"
      >
        <span>Scroll</span>

        <ArrowDown size={14} strokeWidth={1.7} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
