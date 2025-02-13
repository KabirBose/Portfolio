export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Tech University",
      year: "2018 - 2022",
    },
    {
      degree: "Full-Stack Web Development Bootcamp",
      school: "Coding Academy",
      year: "2022",
    },
  ];

  return (
    <section id="education" className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">$ ls education/</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="border border-white p-4 invert-colors">
            <h3 className="font-bold">{edu.degree}</h3>
            <p>{edu.school}</p>
            <p className="text-sm">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
