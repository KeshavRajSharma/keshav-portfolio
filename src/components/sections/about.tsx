"use client";

import { BrainCircuit, Code2, GraduationCap, Layers3 } from "lucide-react";
import { motion } from "motion/react";

import styles from "./about.module.css";

const areas = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete applications across frontend, backend, APIs, databases, and real-time features.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Working with machine learning, computer vision, intelligent systems, and practical AI applications.",
    icon: BrainCircuit,
  },
  {
    title: "Data Science",
    description:
      "Understanding data through analysis, visualization, feature engineering, modeling, and evaluation.",
    icon: Layers3,
  },
];

export function About() {
  return (
    <section
      id="about"
      className={`section ${styles.section}`}
      aria-labelledby="about-heading"
    >
      <div className={`site-container ${styles.container}`}>
        <motion.div
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <p className="section-eyebrow">About</p>

          <h2 id="about-heading" className={styles.title}>
            A little about me.
          </h2>

          <p className={styles.subtitle}>
            I enjoy turning ideas into complete, practical software systems.
          </p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.story}
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.06,
              ease: "easeOut",
            }}
          >
            <p>
              I&apos;m Keshav Raj Sharma, a Computer Engineering student at
              Kathmandu University with a strong interest in full-stack
              development, artificial intelligence, and data science.
            </p>

            <p>
              I particularly enjoy projects where different parts of software
              engineering come together — interfaces, APIs, databases,
              algorithms, machine learning models, and real-time systems —
              rather than working on only one isolated component.
            </p>

            <div className={styles.education}>
              <div className={styles.educationIcon}>
                <GraduationCap size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>

              <div className={styles.educationContent}>
                <span className={styles.educationLabel}>Education</span>

                <strong>Kathmandu University</strong>

                <span>Bachelor&apos;s in Computer Engineering</span>
              </div>
            </div>
          </motion.div>

          <div className={styles.areas}>
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  className={styles.areaCard}
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                    ease: "easeOut",
                  }}
                >
                  <div className={styles.areaIcon}>
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <div>
                    <h3>{area.title}</h3>

                    <p>{area.description}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
