"use client";

import { GraduationCap, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

import { experienceItems, type ExperienceType } from "@/data/experience";

import styles from "./experience.module.css";

const iconMap: Record<ExperienceType, typeof GraduationCap> = {
  Education: GraduationCap,
  Hackathon: Trophy,
  "Collaborative Work": Users,
};

export function Experience() {
  return (
    <section
      id="experience"
      className={`section ${styles.section}`}
      aria-labelledby="experience-heading"
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
          <p className="section-eyebrow">Journey</p>

          <div className={styles.headingRow}>
            <h2 id="experience-heading">Experience &amp; Activities</h2>

            <p>
              Academic learning, collaborative development, and practical
              activities that have shaped how I approach software and
              engineering.
            </p>
          </div>
        </motion.div>

        <div className={styles.timeline}>
          {experienceItems.map((item, index) => {
            const Icon = iconMap[item.type];

            return (
              <motion.article
                key={item.id}
                className={styles.item}
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
                  duration: 0.48,
                  delay: Math.min(index * 0.07, 0.2),
                  ease: "easeOut",
                }}
              >
                <div className={styles.marker} aria-hidden="true">
                  <Icon size={19} strokeWidth={1.8} />
                </div>

                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <div>
                      <span className={styles.type}>{item.type}</span>

                      <h3>{item.title}</h3>

                      {item.organization && (
                        <p className={styles.organization}>
                          {item.organization}
                        </p>
                      )}
                    </div>

                    {item.period && (
                      <span className={styles.period}>{item.period}</span>
                    )}
                  </div>

                  <p className={styles.description}>{item.description}</p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul
                      className={styles.highlights}
                      aria-label={`${item.title} highlights`}
                    >
                      {item.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
