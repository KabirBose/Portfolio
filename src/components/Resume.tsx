export default function Resume() {
  return (
    <section id="resume" className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">$ cat resume.pdf</h2>
      <p className="mb-4">
        Here's a brief overview of my professional experience and skills:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>5+ years of experience in web development</li>
        <li>Proficient in React, Next.js, TypeScript, and Node.js</li>
        <li>Strong understanding of responsive design and accessibility</li>
        <li>Experience with CI/CD pipelines and cloud platforms</li>
      </ul>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white p-2 invert-colors"
      >
        Download Full Resume
      </a>
    </section>
  );
}
