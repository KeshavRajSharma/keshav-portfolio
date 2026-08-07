"use client";

import { ArrowUpRight, FolderCode, LockKeyhole } from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

import { otherProjects } from "@/data/projects";

import styles from "./other-projects.module.css";

export function OtherProjects() {
  return (
    <section
      id="other-projects"
      className={`section ${styles.section}`}
      aria-labelledby="other-projects-heading"
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
          <p className="section-eyebrow">More Work</p>

          <div className={styles.headingRow}>
            <h2 id="other-projects-heading">Other Projects</h2>

            <p>
              Additional projects from data science, collaborative development,
              and hackathons.
            </p>
          </div>
        </motion.div>

        <div className={styles.grid}>
          {otherProjects.map((project, index) => {
            const visibleTechnologies = project.technologies.filter(
              (technology) => !technology.startsWith("TODO"),
            );

            return (
              <motion.article
                key={project.id}
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
                  delay: Math.min(index * 0.06, 0.18),
                  ease: "easeOut",
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.icon}>
                    <FolderCode
                      size={21}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div className={styles.externalLinks}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <SiGithub size={18} aria-hidden="true" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live ${project.title} project`}
                      >
                        <ArrowUpRight
                          size={19}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </a>
                    )}
                  </div>
                </div>

                <div className={styles.meta}>
                  <span>{project.category}</span>

                  {project.status && (
                    <span className={styles.status}>{project.status}</span>
                  )}
                </div>

                <h3>{project.title}</h3>

                <p className={styles.description}>{project.shortDescription}</p>

                {project.projectType === "Collaborative" && (
                  <span className={styles.collaborative}>
                    Collaborative Project
                  </span>
                )}

                {visibleTechnologies.length > 0 && (
                  <ul
                    className={styles.technologies}
                    aria-label={`${project.title} technologies`}
                  >
                    {visibleTechnologies.slice(0, 5).map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.footer}>
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.projectLink}
                    >
                      View project
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  ) : (
                    <span className={styles.private}>
                      <LockKeyhole
                        size={14}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                      Private project
                    </span>
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
