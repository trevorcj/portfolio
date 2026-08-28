import ContactSection from "@/components/Contacts";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Chimamanda Justus",
  description:
    "Learn more about Chimamanda Justus, a frontend developer based in Lagos, Nigeria, specializing in React, Next.js, TypeScript, and modern web development.",
};

function About() {
  return (
    <>
      <section className="intro-section">
        <div className="text-sm text-text flex flex-col gap-3">
          <p className="leading-6">
            I&apos;m Chimamanda Justus — Trevor, a frontend developer based in
            Lagos, Nigeria.
          </p>

          <p className="leading-6">
            I build web applications, SaaS products, dashboards, and early-stage
            ideas from the point where someone says &quot;we should build
            this&quot; to the point where someone can actually use it.
          </p>

          <p className="leading-6">
            Most of my work starts somewhere between a Figma file, a PRD, and a
            slightly vague product idea. I take those pieces and turn them into
            interfaces that are fast, responsive, accessible, and, most
            importantly, easy to understand.
          </p>

          <p className="leading-6">
            I work primarily with React, Next.js, TypeScript, JavaScript, and
            modern CSS, and I care deeply about the details that sit between
            design and engineering: interaction, motion, responsiveness,
            accessibility, performance, and the little moments that make a
            product feel considered.
          </p>

          <p className="leading-6">
            I don&apos;t think frontend development is just about making a
            design look like the screenshot.
          </p>

          <p className="leading-6 text-white">
            It&apos;s about making the product make sense.
          </p>

          <p className="leading-6">
            That means asking questions when a flow feels wrong, simplifying an
            interaction when it can be simpler, thinking about what happens on a
            slow connection, and caring about the experience after the code has
            shipped.
          </p>

          <p className="leading-6">
            I&apos;ve worked across SaaS, fintech, developer tools, and
            early-stage products, often working closely with founders,
            designers, product managers, and engineers to turn ideas into
            something real.
          </p>

          <p className="leading-6">
            I&apos;m based in Lagos and work comfortably with distributed teams
            across time zones.
          </p>

          <p className="leading-6">
            If you&apos;re building something (anything) and need a frontend
            developer who cares about both the code and the product, I&apos;d
            love to hear about it.
          </p>
        </div>
      </section>

      <ContactSection />

      <Footer>
        <Link href="/" className="text-sm">
          Home
        </Link>
      </Footer>
    </>
  );
}

export default About;
