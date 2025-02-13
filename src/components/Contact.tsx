import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/KabirBose", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kabirbose/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:kabirbose04@gmail.com",
      label: "kabirbose04@gmail.com",
    },
    { icon: Phone, label: "+1 416-625-3954" },
  ];

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">$ ./contact_me.sh</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-2 invert-colors flex items-center gap-2 text-xl md:text-2xl"
            aria-label={link.label}
          >
            <link.icon size={20} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
