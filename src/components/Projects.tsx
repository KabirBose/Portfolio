export default function Projects() {
  const projects = [
    {
      name: "Advanced Networking II Case Study",
      description:
        "Configured a network with dynamic routing, switching, and security.",
      technologies: ["OSPF", "BGP", "EIGRP", "PVST+", "IPSec"],
    },
    {
      name: "Mintly Finance",
      description:
        "Personal finance app that uses AI to analyze your spending.",
      technologies: ["TypeScript", "Next.js", "Plaid", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl md:text-4xl mb-4">$ ls projects/</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-white p-4 invert-colors">
            <h3 className="text-xl md:text-2xl mb-2">{project.name}</h3>
            <p className="text-lg md:text-xl mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-md md:text-lg bg-white text-black px-2 py-1 rounded"
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
