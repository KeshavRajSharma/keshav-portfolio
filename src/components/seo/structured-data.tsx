import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/socials";

export function StructuredData() {
  const sameAs = socialLinks
    .filter((social) => social.external && social.name !== "Email")
    .map((social) => social.href);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    "@id": `${siteConfig.url}/#person`,

    name: "Keshav Raj Sharma",

    url: siteConfig.url,

    description:
      "Computer Engineering student, Full-Stack Developer, and AI & Data Science enthusiast building practical software systems.",

    sameAs,

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kathmandu University",
    },

    knowsAbout: [
      "Full-Stack Development",
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Engineering",
      "Computer Graphics",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",

    "@id": `${siteConfig.url}/#website`,

    url: siteConfig.url,

    name: "Keshav Raj Sharma",

    description: siteConfig.description,

    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },

    inLanguage: "en",
  };

  const jsonLd = [personJsonLd, websiteJsonLd];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
