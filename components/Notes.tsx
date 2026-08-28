import Link from "next/link";

const notes = [
  {
    id: 0,
    year: "July 2026",
    title: "You don’t always need a new idea",
    url: "https://medium.com/@heyitstrev/you-dont-always-need-a-new-idea-9aa35d7ce8b4",
  },
  {
    id: 1,
    year: "July 2026",
    title: "Who told you that?",
    url: "https://medium.com/readers-club/who-told-you-that-16d293f4c1b4",
  },
  {
    id: 2,
    year: "June 2026",
    title: "The trap of falling in love with solutions",
    url: "https://medium.com/@heyitstrev/the-trap-of-falling-in-love-with-solutions-d6c38dd65978",
  },
];

function Notes() {
  return (
    <>
      <ul>
        {notes.map((note) => (
          <Link
            key={note.id}
            href={note.url}
            target="_blank"
            className="flex justify-between border-b border-[#2c2b2b] py-3 text-sm first:pt-0 last:border-b-0 sm:gap-4 no-link-style p-0 transition-all duration-500 ease-in-out hover:pl-2">
            <span className="text-white">{note.title}</span>

            <time className="text-text">{note.year}</time>
          </Link>
        ))}
      </ul>
    </>
  );
}

function NotesSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">notes</h2>

      <div className="mt-4">
        <Notes />
      </div>
    </section>
  );
}

export default NotesSection;
