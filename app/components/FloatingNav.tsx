"use client";

import { useEffect } from "react";

const SCROLL_THRESHOLD = 32;

export default function FloatingNav() {
  useEffect(() => {
    const root = document.documentElement;

    const update = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        root.setAttribute("data-scrolled", "true");
      } else {
        root.removeAttribute("data-scrolled");
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <header className="nav" aria-label="Primary">
      <a className="brand" aria-label="chaitanya-rathi" href="/">
        <span className="brand-brace">{"{"}</span>chaitanya-rathi
        <span className="brand-brace">{"}"}</span>
      </a>
      <nav className="nav-links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-cta" href="mailto:chaitanyarathi29@gmail.com">
        Email me
      </a>
    </header>
  );
}
