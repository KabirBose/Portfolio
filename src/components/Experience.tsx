"use client";

import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Present",
      description:
        "Leading frontend development for cutting-edge web applications.",
    },
    {
      title: "Web Developer",
      company: "Digital Solutions LLC",
      period: "2019 - 2021",
      description:
        "Developed and maintained client websites using modern web technologies.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">
        $ grep "work history" experience.log
      </h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className={`border border-white p-4 cursor-pointer invert-colors ${
              expandedIndex === index ? "bg-white text-black" : ""
            }`}
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <h3 className="font-bold">{exp.title}</h3>
            <p>{exp.company}</p>
            <p className="text-sm">{exp.period}</p>
            {expandedIndex === index && (
              <p className="mt-2">{exp.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
