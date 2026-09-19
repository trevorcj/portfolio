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
    platform: "Instagram",
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
    <ul className="flex flex-col items-start gap-3">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Link
            href={contact.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm">
            <span className="text-foreground">{contact.platform}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactSection() {
  return (
    <section className="mt-16" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="text-sm text-text">contact</h2>

      <div className="mt-4">
        <Contact />
      </div>
    </section>
  );
}

export default ContactSection;
