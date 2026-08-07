"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function updateNavbar() {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => document.querySelector<HTMLElement>(item.href))
        .filter((section): section is HTMLElement => section !== null);

      /*
       * The active section is whichever section currently
       * crosses this point near the upper part of the viewport.
       *
       * This is more predictable than choosing from only the
       * IntersectionObserver entries that changed.
       */
      const activationPoint = Math.min(window.innerHeight * 0.28, 220);

      let currentSection = "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationPoint && rect.bottom > activationPoint) {
          currentSection = section.id;
          break;
        }
      }

      /*
       * Contact can be short. When the user reaches the bottom
       * of the page, make sure Contact becomes active.
       */
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (reachedBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbar);

    return () => {
      window.removeEventListener("scroll", updateNavbar);

      window.removeEventListener("resize", updateNavbar);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className={`navbar-shell ${
        scrolled || menuOpen ? "navbar-shell-scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <a
          href="#"
          className="navbar-brand"
          aria-label="Keshav Raj Sharma home"
          onClick={closeMenu}
        >
          Keshav Raj Sharma<span>.</span>
        </a>

        <div className="navbar-right">
          <nav className="navbar-desktop" aria-label="Primary navigation">
            <ul className="navbar-links">
              {navItems.map((item) => {
                const sectionId = item.href.slice(1);

                const isActive = activeSection === sectionId;

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`navbar-link ${
                        isActive ? "navbar-link-active" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="navbar-actions">
            <ThemeToggle />

            <button
              type="button"
              className="navbar-menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              {menuOpen ? (
                <X size={20} strokeWidth={1.9} aria-hidden="true" />
              ) : (
                <Menu size={20} strokeWidth={1.9} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="navbar-mobile"
            aria-label="Mobile navigation"
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.18,
              ease: "easeOut",
            }}
          >
            <ul className="navbar-mobile-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
