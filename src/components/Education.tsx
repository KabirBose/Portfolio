export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (Honours) in Networking & IT Security",
      school: "Ontario Tech University",
      year: "Sep 2022 - Apr 2027",
    },
    {
      degree: "CCNA (Cisco Certified Network Associate)",
      school: "Cisco",
      year: "Dec 2025",
    },
  ];

  return (
    <section id="education" className="mb-12">
      <h2 className="text-2xl md:text-4xl mb-4">$ ls education/</h2>
      <ul className="space-y-4">
        {education.map((edu, index) => (
          <li key={index} className="border border-white p-4 invert-colors">
            <h3 className="text-xl md:text-2xl">{edu.degree}</h3>
            <p className="text-xl md:text-2xl">{edu.school}</p>
            <p className="text-md md:text-lg">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
