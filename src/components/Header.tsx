"use client";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const elementId = target.getAttribute("href")?.slice(1);
      const element = document.getElementById(elementId || "");
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <header className="mb-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Welcome to my portfolio
      </h1>
      <nav>
        <ul className="flex flex-wrap gap-4">
          {[
            "About",
            "Education",
            "Experience",
            "Projects",
            "Resume",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="invert-colors p-2">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
