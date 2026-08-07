export type SocialName =
  | "GitHub"
  | "LinkedIn"
  | "Facebook"
  | "Instagram"
  | "Email";

export type SocialLink = {
  name: SocialName;
  label: string;
  href: string;
  external: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    label: "KeshavRajSharma",
    href: "https://github.com/KeshavRajSharma",
    external: true,
  },
  {
    name: "LinkedIn",
    label: "Keshav Raj Sharma",
    href: "https://www.linkedin.com/in/keshav-raj-sharma-5a0835418",
    external: true,
  },
  {
    name: "Facebook",
    label: "Keshav Raj Sharma",
    href: "https://www.facebook.com/keshav.raj.sharma.110700",
    external: true,
  },
  {
    name: "Instagram",
    label: "@keshav_raj_sharma",
    href: "https://www.instagram.com/keshav_raj_sharma/",
    external: true,
  },
  {
    name: "Email",
    label: "jdkeshav01@gmail.com",
    href: "mailto:jdkeshav01@gmail.com",
    external: false,
  },
];
