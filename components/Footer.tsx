import ThemeToggle from "@/components/ThemeToggle";

function Footer({ children }: { children: React.ReactNode }) {
  return (
    <footer className="mt-20 mb-10 flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <p className="text-sm text-text">Currently in Lagos, Nigeria • UTC+1</p>
      </div>

      <div>{children}</div>
    </footer>
  );
}

export default Footer;
