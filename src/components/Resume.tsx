export default function Resume() {
  return (
    <section id="resume" className="mb-12">
      <h2 className="text-2xl md:text-4xl mb-4">$ cat resume.pdf</h2>
      <p className="mb-4 text-xl md:text-2xl">
        Here's a brief overview of my professional experience and skills:
      </p>
      <ul className="list-disc list-inside mb-4 text-xl md:text-2xl">
        <li>1 year of professional experience in a data centre environment</li>
        <li>
          Proficient in JavaScript, C++, Python, and respective frameworks
        </li>
        <li>Strong understanding of responsive design and accessibility</li>
        <li>Experience with CI/CD pipelines and cloud platforms</li>
      </ul>
      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-white p-2 invert-colors text-xl md:text-2xl"
      >
        Download Full Resume
      </a>
    </section>
  );
}
