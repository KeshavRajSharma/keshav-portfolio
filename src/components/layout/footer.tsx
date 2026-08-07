import { Mail } from "lucide-react";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";

import { socialLinks, type SocialName } from "@/data/socials";

import styles from "./footer.module.css";

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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`site-container ${styles.container}`}>
        <div className={styles.identity}>
          <a href="#" className={styles.name} aria-label="Back to top">
            Keshav Raj Sharma<span>.</span>
          </a>

          <p>Full-Stack Development · AI · Data Science</p>
        </div>

        <div className={styles.socials}>
          {socialLinks.map((social) => {
            const Icon = iconMap[social.name];

            return (
              <a
                key={social.name}
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noreferrer" : undefined}
                aria-label={social.name}
                title={social.name}
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            );
          })}
        </div>

        <p className={styles.copyright}>© {year} Keshav Raj Sharma</p>
      </div>
    </footer>
  );
}
