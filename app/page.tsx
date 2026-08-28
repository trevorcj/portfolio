import BlogSection from "@/components/Blogs";
import ContactSection from "@/components/Contacts";
import ExperienceSection from "@/components/Experiences";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import NotesSection from "@/components/Notes";
import Projects from "@/components/Projects";
import Link from "next/link";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chimamanda Justus",
  url: "https://trevorcjustus.tech",
  jobTitle: "Frontend Developer",
  description:
    "Chimamanda Justus is a frontend developer based in Lagos, Nigeria, building web applications and digital products with React, Next.js, and TypeScript.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },

  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Web Development",
    "SaaS",
    "UI Engineering",
    "React Native",
    "AI Engineering",
    "Technical Writing",
  ],

  sameAs: [
    "https://github.com/trevorcj",
    "https://www.linkedin.com/in/trevorcjustus",
    "https://x.com/trevorcjustus",
    "https://medium.com/@heyitstrev",
  ],
};

function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />

      <main>
        <section className="intro-section">
          <div className="text-sm text-text flex flex-col gap-3">
            <h1 className="">I’m Chimamanda, a Frontend developer.</h1>

            <p>
              I turn designs, ideas, and product requirements into fast,
              well-crafted interfaces that make software easier to understand
              and use.
            </p>

            <p>
              I work primarily with React, Next.js, TypeScript, and modern web
              technologies, with a particular interest in SaaS and early-stage
              products.
            </p>

            <p>
              Based in Lagos, Nigeria. Currently open to full-time frontend
              roles and interesting collaborations.{" "}
              <Link href="https://cal.com/trevorcjustus" target="_blank">
                Book a call
              </Link>
            </p>
          </div>

          <MagneticButton href="mailto:trevorcjustus@gmail.com" strength={0.2}>
            Get in touch
          </MagneticButton>
        </section>

        <Projects />

        <ExperienceSection />

        <BlogSection />

        <NotesSection />

        <ContactSection />
      </main>

      <Footer>
        <Link href="/about" className="text-sm">
          About
        </Link>
      </Footer>
    </>
  );
}

export default Home;
