"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

import { featuredProjects } from "@/data/projects";

import styles from "./selected-work.module.css";

const accentClassMap = {
  "blue-violet": styles.blueViolet,
  "red-orange": styles.redOrange,
  "cyan-emerald": styles.cyanEmerald,
  "violet-blue": styles.violetBlue,
  "orange-pink": styles.orangePink,
  "blue-cyan": styles.blueCyan,
  "green-blue": styles.greenBlue,
};

export function SelectedWork() {
  return (
    <section
      id="projects"
      className={`section ${styles.section}`}
      aria-labelledby="projects-heading"
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
          <p className="section-eyebrow">Projects</p>

          <div className={styles.headingRow}>
            <h2 id="projects-heading">Selected Work</h2>

            <p>
              A selection of projects across software development, AI, data
              science, IoT, and computer graphics.
            </p>
          </div>
        </motion.div>

        <div className={styles.projects}>
          {featuredProjects.map((project, index) => {
            const accentClass = accentClassMap[project.accent];

            return (
              <motion.article
                key={project.id}
                className={styles.project}
                initial={{
                  opacity: 0,
                  y: 24,
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
                  duration: 0.52,
                  delay: Math.min(index * 0.05, 0.2),
                  ease: "easeOut",
                }}
              >
                <div className={`${styles.visual} ${accentClass}`}>
                  <div className={styles.visualGlow} aria-hidden="true" />

                  <span className={styles.projectNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className={styles.visualContent}>
                    <span className={styles.visualCategory}>
                      {project.category}
                    </span>

                    <strong>{project.title}</strong>

                    <div className={styles.visualTechnologies}>
                      {project.technologies
                        .filter((technology) => !technology.startsWith("TODO"))
                        .slice(0, 4)
                        .map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                    </div>
                  </div>

                  <span className={styles.previewLabel}>Project Preview</span>
                </div>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{String(index + 1).padStart(2, "0")}</span>

                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className={styles.description}>
                    {project.shortDescription}
                  </p>

                  <ul
                    className={styles.technologies}
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies
                      .filter((technology) => !technology.startsWith("TODO"))
                      .slice(0, 6)
                      .map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                  </ul>

                  <div className={styles.links}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SiGithub size={16} aria-hidden="true" />
                        GitHub
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <ExternalLink
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        Live Site
                      </a>
                    )}

                    {!project.githubUrl && !project.liveUrl && (
                      <span className={styles.privateLabel}>
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
