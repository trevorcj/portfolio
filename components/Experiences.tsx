const experiences = [
  {
    id: 0,
    years_of_experience: "Apr. 2026 - July 2026",
    title: "Frontend Engineer — Contract",
    company: "Bolda",
  },
  {
    id: 1,
    years_of_experience: "Apr. 2026 - Aug. 2026",
    title: "Product Engineer",
    company: "Manta",
  },
  {
    id: 2,
    years_of_experience: "Sep. 2025 - Apr. 2026",
    title: "Developer Relations Engineer",
    company: "Manta",
  },
  {
    id: 3,
    years_of_experience: "July 2025 - Sep. 2025",
    title: "Technical Writer",
    company: "Manta",
  },
  {
    id: 4,
    years_of_experience: "Nov. 2025 - Feb. 2026",
    title: "Solutions Architect",
    company: "OnePipe",
  },
  {
    id: 5,
    years_of_experience: "Feb. 2023 - Dec. 2023",
    title: "IT Support Officer",
    company: "DIRI-NIFAC Consulting",
  },
];

function Experiences() {
  return (
    <>
      <ul>
        {experiences.map((experience) => (
          <li
            key={experience.id}
            className="flex gap-8 border-b border-[#2c2b2b] py-3 text-sm first:pt-0 last:border-b-0 sm:gap-4">
            <span className="text-text">{experience.years_of_experience}</span>

            <span className="flex gap-4">
              <span>{experience.title}</span>
              <span className="text-text">{experience.company}</span>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

function ExperienceSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">experiences</h2>

      <div className="mt-4">
        <Experiences />
      </div>
    </section>
  );
}

export default ExperienceSection;
