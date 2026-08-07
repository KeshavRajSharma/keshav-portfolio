"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  LockKeyhole,
} from "lucide-react";
import { motion } from "motion/react";
import { SiGithub } from "react-icons/si";

import type { Project } from "@/types/project";

import styles from "./project-detail.module.css";

type ProjectDetailProps = {
  project: Project;
};

const accentClassMap = {
  "blue-violet": styles.blueViolet,
  "red-orange": styles.redOrange,
  "cyan-emerald": styles.cyanEmerald,
  "violet-blue": styles.violetBlue,
  "orange-pink": styles.orangePink,
  "blue-cyan": styles.blueCyan,
  "green-blue": styles.greenBlue,
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const technologies = project.technologies.filter(
    (technology) => !technology.startsWith("TODO"),
  );

  return (
    <article className={styles.page}>
      <div className="site-container">
        <motion.div
          className={styles.hero}
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Link href="/#projects" className={styles.backLink}>
            <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            Selected Work
          </Link>

          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <p className={styles.category}>{project.category}</p>

              <h1>{project.title}</h1>

              <p className={styles.lead}>{project.shortDescription}</p>

              <div className={styles.actions}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.primaryAction}
                  >
                    <SiGithub size={17} aria-hidden="true" />
                    GitHub
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryAction}
                  >
                    <ExternalLink
                      size={17}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    Live Site
                  </a>
                )}

                {!project.githubUrl && !project.liveUrl && (
                  <span className={styles.privateProject}>
                    <LockKeyhole
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                    Private project
                  </span>
                )}
              </div>
            </div>

            <div
              className={`${styles.preview} ${accentClassMap[project.accent]}`}
            >
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={
                      project.imageAlt ?? `${project.title} project screenshot`
                    }
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 55vw"
                    className={styles.previewImage}
                  />

                  <div
                    className={styles.previewImageOverlay}
                    aria-hidden="true"
                  />
                </>
              ) : (
                <>
                  <div className={styles.previewGlow} aria-hidden="true" />

                  <span className={styles.previewLabel}>Project</span>

                  <div className={styles.previewContent}>
                    <span>{project.category}</span>

                    <strong>{project.title}</strong>

                    <div className={styles.previewTech}>
                      {technologies.slice(0, 4).map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>

        <div className={styles.body}>
          <motion.section
            className={styles.overview}
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
            }}
          >
            <p className="section-eyebrow">Overview</p>

            <h2>About the project</h2>

            <p>{project.description ?? project.shortDescription}</p>
          </motion.section>

          <motion.aside
            className={styles.sidebar}
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
              delay: 0.08,
            }}
          >
            <div className={styles.infoBlock}>
              <span>Type</span>

              <strong>{project.projectType ?? "Project"}</strong>
            </div>

            {project.status && (
              <div className={styles.infoBlock}>
                <span>Status</span>

                <strong>{project.status}</strong>
              </div>
            )}

            <div className={styles.infoBlock}>
              <span>Source</span>

              <strong>{project.sourceVisibility}</strong>
            </div>
          </motion.aside>
        </div>

        {project.myRole && (
          <motion.section
            className={styles.sectionBlock}
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
            }}
          >
            <p className="section-eyebrow">Contribution</p>

            <h2>My Role</h2>

            <p>{project.myRole}</p>
          </motion.section>
        )}

        {technologies.length > 0 && (
          <motion.section
            className={styles.sectionBlock}
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
            }}
          >
            <p className="section-eyebrow">Technology</p>

            <h2>Tech Stack</h2>

            <ul className={styles.technologies}>
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <motion.section
            className={styles.gallerySection}
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <p className="section-eyebrow">Project Visuals</p>

            <h2>Inside the project</h2>

            <div className={styles.gallery}>
              {project.screenshots.map((screenshot) => (
                <figure key={screenshot.src} className={styles.galleryItem}>
                  <div className={styles.galleryImage}>
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 800px) 100vw, 1100px"
                    />
                  </div>

                  <figcaption>{screenshot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </motion.section>
        )}

        <div className={styles.bottomNavigation}>
          <Link href="/#projects">
            <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
            Back to projects
          </Link>
        </div>
      </div>
    </article>
  );
}
 