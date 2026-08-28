import Link from "next/link";

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="mt-20 mb-10 flex justify-between text-sm">
      <p className="text-sm text-text">Currently in Lagos, Nigeria • UTC+1</p>

      {children}
    </footer>
  );
}

export default Footer;
