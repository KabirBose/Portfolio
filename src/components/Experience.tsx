export default function Experience() {
  const experiences = [
    {
      title: "Network Engineering Intern",
      company: "CBC (Canadian Broadcasting Corporation)",
      period: "Sep 2024 - Sep 2025",
      description:
        "Migrating standard LAN to Cisco SDA network and managing media-production devices on spine.",
    },
    {
      title: "Camp Counsellor",
      company: "City of Toronto",
      period: "Jun 2022 - Aug 2024",
      description:
        "Ensured the safety of campers and made sure they had a memorable summer.",
    },
    {
      title: "Naval Communicator",
      company: "Royal Canadian Navy (Canadian Armed Forces)",
      period: "Oct 2020 - Jun 2022",
      description:
        "Completed BMQ (Basic Military Qualification) in CFB Valcartier in Québec.",
    },
  ];

  return (
    <section id="experience" className="mb-12">
      <h2 className="text-2xl md:text-4xl mb-4">
        $ grep "work history" experience.log 👨‍💻
      </h2>
      <ul className="space-y-4">
        {experiences.map((exp, index) => (
          <li
            key={index}
            className="border border-white p-4 cursor-pointer invert-colors"
          >
            <h3 className="text-xl md:text-2xl">{exp.title}</h3>
            <p className="text-xl md:text-2xl">{exp.company}</p>
            <p className="text-md md:text-lg">{exp.period}</p>
            <p className="mt-2 text-lg md:text-xl">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
