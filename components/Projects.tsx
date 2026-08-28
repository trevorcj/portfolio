import Image from "next/image";
import Link from "next/link";

const projectDetails = [
  {
    title: "Orbit",
    description:
      "A subscription billing and revenue infrastructure platform designed for modern software companies and digital merchants. Built with Next.js, TypeScript, Supabase, Cron-job, and Paystack.",
    thumbnail: "/orbit.png",
    url: "https://orbitbilling.me",
  },
  {
    title: "Klean",
    description:
      "A command-line tool designed to scaffold a clean Vite + React application with optional Tailwind CSS and structured project architecture. Built with NodeJS.",
    thumbnail: "https://github.com/trevorcj/klean/raw/main/homepage/klean.png",
    url: "https://tryklean.vercel.app/",
  },
  {
    title: "Buffer",
    description:
      "A financial automation app that puts saving inside everyday spending. Built with React Native, TypeScript, Interswitch, and Supabase.",
    thumbnail: "/buffer.png",
    url: "https://github.com/trevorcj/buffer",
  },
  {
    title: "MoodTab",
    description:
      "A calm new tab for Chrome with lo-fi music, inspirational quotes, and aesthetic vibes.",
    thumbnail: "/moodtab.png",
    url: "https://moodtab-landing-page.vercel.app/",
  },
];

function ProjectTile() {
  return (
    <>
      {projectDetails.map((project) => (
        <div key={project.title} className="mb-20">
          <div className="bg-[#ededed] p-6 w-full">
            <Image
              src={project.thumbnail}
              alt={`${project.title}, ${project.description}`}
              width={1000}
              height={500}
              className=""
            />
          </div>

          <div className="mt-6 flex flex-col gap-3 p-4 items-start">
            <h3 className="text-white text-sm font-medium ">{project.title}</h3>
            <p className="text-text text-sm ">{project.description}</p>
            <Link href={project.url} target="_blank" className="text-sm">
              View {project.title}
            </Link>{" "}
          </div>
        </div>
      ))}
    </>
  );
}

function ProjectSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">selected work</h2>

      <div className="mt-4">
        <ProjectTile />
      </div>
    </section>
  );
}

export default ProjectSection;
