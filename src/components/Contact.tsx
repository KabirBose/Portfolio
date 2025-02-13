"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log({ name, email, message });
    setSubmitted(true);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
    { icon: Phone, href: "tel:+1234567890", label: "Phone" },
  ];

  return (
    <section id="contact" className="mb-12">
      <h2 className="text-xl md:text-2xl font-bold mb-4">$ ./contact_me.sh</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white p-2 invert-colors flex items-center gap-2"
            aria-label={link.label}
          >
            <link.icon size={20} />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
      {submitted ? (
        <p>
          Thank you for your message! I'll get back to you as soon as possible.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 bg-black border border-white invert-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 bg-black border border-white invert-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 bg-black border border-white invert-colors h-32"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border border-white px-4 py-2 invert-colors"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
