export default function Projects() {
  const projects = [
    {
      name: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js and Stripe integration.",
      technologies: ["Next.js", "React", "Node.js", "Stripe", "MongoDB"],
    },
    {
      name: "Task Management App",
      description:
        "A responsive task management application with real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
    },
    {
      name: "Portfolio Website",
      description: "A customizable portfolio template for developers.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">$ ls projects/</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-white p-4 invert-colors">
            <h3 className="font-bold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs bg-white text-black px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
