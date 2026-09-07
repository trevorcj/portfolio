import Image from "next/image";
import Link from "next/link";

const projectDetails = [
  {
    title: "Alpine.js Components",
    description:
      "A collection of interactive UI components I built with Alpine.js and Tailwind CSS.",
    thumbnail: "/alpine.png",
    url: "https://alpine-components.vercel.app",
  },
  {
    title: "MIVA Telegram Bot",
    description:
      "A Telegram automation bot for MIVA Charity & Volunteering Club, built to automate birthday announcements, member data, image processing, and scheduled messages.",
    thumbnail: "/bot.png",
    url: "https://web.telegram.org/k/#@MIVACharityClubBot",
  },
];

function ExperimentsTile() {
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

function ExperiementsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">side projects / experiements</h2>

      <div className="mt-4">
        <ExperimentsTile />
      </div>
    </section>
  );
}

export default ExperiementsSection;
