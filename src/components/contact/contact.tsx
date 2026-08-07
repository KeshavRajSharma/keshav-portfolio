"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";

import { socialLinks, type SocialName } from "@/data/socials";

import styles from "./contact.module.css";

const iconMap = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Facebook: SiFacebook,
  Instagram: SiInstagram,
  Email: Mail,
} satisfies Record<
  SocialName,
  React.ComponentType<{
    size?: number;
    "aria-hidden"?: boolean | "true" | "false";
  }>
>;

export function Contact() {
  const email = socialLinks.find((social) => social.name === "Email");

  return (
    <section
      id="contact"
      className={`section ${styles.section}`}
      aria-labelledby="contact-heading"
    >
      <div className="site-container">
        <motion.div
          className={styles.wrapper}
          initial={{
            opacity: 0,
            y: 22,
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
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <div className={styles.glow} aria-hidden="true" />

          <div className={styles.content}>
            <p className="section-eyebrow">Get in Touch</p>

            <h2 id="contact-heading">
              Have something worth{" "}
              <span className="gradient-text">building?</span>
            </h2>

            <p className={styles.description}>
              Whether it&apos;s a project, collaboration, opportunity, or simply
              a conversation about software and technology, feel free to reach
              out.
            </p>

            {email && (
              <a href={email.href} className={styles.emailButton}>
                <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
                Send an Email
                <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            )}
          </div>

          <div className={styles.socialArea}>
            <span className={styles.socialLabel}>Find me online</span>

            <div className={styles.socialGrid}>
              {socialLinks.map((social, index) => {
                const Icon = iconMap[social.name];

                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noreferrer" : undefined}
                    className={styles.socialCard}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 + index * 0.045,
                    }}
                  >
                    <div className={styles.socialIcon}>
                      <Icon size={18} aria-hidden="true" />
                    </div>

                    <div className={styles.socialContent}>
                      <strong>{social.name}</strong>

                      <span>{social.label}</span>
                    </div>

                    <ArrowUpRight
                      className={styles.socialArrow}
                      size={15}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
