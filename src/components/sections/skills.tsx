"use client";

import {
  Bot,
  Braces,
  Code2,
  Database,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";
import { motion } from "motion/react";

import { skillGroups } from "@/data/skills";

import styles from "./skills.module.css";

const icons = [Code2, PanelsTopLeft, Braces, Bot, Database, Wrench];

export function Skills() {
  return (
    <section
      id="skills"
      className={`section ${styles.section}`}
      aria-labelledby="skills-heading"
    >
      <div className="site-container">
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
          <p className="section-eyebrow">Capabilities</p>

          <div className={styles.headingRow}>
            <h2 id="skills-heading">Skills &amp; Technologies</h2>

            <p>
              Technologies I use to build applications, work with data, and
              develop engineering projects.
            </p>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {skillGroups.map((group, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={group.title}
                className={styles.card}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.05, 0.2),
                  ease: "easeOut",
                }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <p className={styles.description}>{group.description}</p>

                <ul
                  className={styles.skills}
                  aria-label={`${group.title} skills`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          className={styles.note}
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >
          I focus on choosing the right tools for each project rather than
          treating technologies as proficiency scores.
        </motion.p>
      </div>
    </section>
  );
}
