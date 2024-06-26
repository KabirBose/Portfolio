import ProjCard from "../ui/projCard";

export default function Projects() {
  return (
    <div className="min-h-[80vh] p-8 flex justify-center items-center text-center flex-col gap-3 bg-[url('/backgrounds/mesh-gradient-1.png')] bg-center object-cover">
      <h1 className="text-green-500 font-space text-2xl md:text-3xl font-bold">
        PROJECTS
      </h1>
      <p className="md:text-lg">
        Check out some of my projects! The rest are on my GitHub.
      </p>

      <div className="mt-6 flex justify-center items-center flex-col md:flex-row md:flex-wrap gap-4 md:gap-8">
        <ProjCard
          title="Route Optimization"
          desc="Program that uses graph theory and Dijkstras 'Shortest Path'
        algorithm to help users find the most efficient path to various EV
        charging stations on the graph."
          href="https://github.com/KabirBose/Advanced-Networking-II-Case-Study"
          imgSrc="/projects/dsa-graph.jpg"
        />

        <ProjCard
          title="Networking Case Study"
          desc="Used Cisco IOS to configure a network based on a given topology. Used multiple addressing, routing, and switching protocols simultaneously. Configured IPSec for network security."
          href="https://github.com/KabirBose/Route-Optimization"
          imgSrc="/projects/wireshark-screenshot.png"
        />

        <ProjCard
          title="AI Flashcard Generator"
          desc="An AI-powered flashcard generator developed using Node.js and C, along with the Google Gemini API. Users can easily generate detailed flashcards in seconds by uploading PDF files. The program runs locally on any device and stores all flashcard decks locally as well."
          href="https://github.com/KabirBose/AI-Flashcard-Generator"
          imgSrc="/projects/flashcard-generator.png"
          // imgPosition="object-top"
          className="md:w-[92%] md:min-h-[30rem]"
        />
      </div>
    </div>
  );
}
