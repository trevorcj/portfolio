import Link from "next/link";

const contacts = [
  {
    id: 0,
    platform: "X",
    url: "https://x.com/trevorcjustus",
  },
  {
    id: 1,
    platform: "LinkedIn",
    url: "https://linkedin.com/in/trevorcjustus",
  },
  {
    id: 2,
    platform: "Intsagram",
    url: "https://instagram.com/trevorcjustus",
  },
  {
    id: 3,
    platform: "GitHub",
    url: "https://github.com/trevorcj",
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:trevorcjustus@gmail.com",
  },
  {
    id: 5,
    platform: "Medium",
    url: "https://medium.com/@heyitstrev",
  },
  {
    id: 6,
    platform: "Peerlist",
    url: "https://peerlist.io/trevv",
  },
];

function Contact() {
  return (
    <>
      <ul className="flex flex-col items-start gap-3">
        {contacts.map((contact) => (
          <Link key={contact.id} href={contact.url} className="text-sm m:gap-4">
            <span className="text-white">{contact.platform}</span>
          </Link>
        ))}
      </ul>
    </>
  );
}

function ContactSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">contact</h2>

      <div className="mt-4">
        <Contact />
      </div>
    </section>
  );
}

export default ContactSection;
