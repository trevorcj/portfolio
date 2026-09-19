import Link from "next/link";

const blogs = [
  {
    id: 0,
    year: "October 2025",
    title: "Nesting GitHub repos with Git Submodules",
    url: "https://trevorteachestech.hashnode.dev/nesting-github-repos-with-git-submodules",
  },
  {
    id: 1,
    year: "August 2025",
    title:
      "How to Split Your UI into React Components: Finding the Right Balance",
    url: "https://trevorteachestech.hashnode.dev/how-to-split-your-ui-into-react-components-finding-the-right-balance",
  },
];

function Blogs() {
  return (
    <ul className="flex flex-col">
      {blogs.map((blog) => (
        <li
          key={blog.id}
          className="group border-b border-border py-3 first:pt-0 last:border-b-0">
          <Link
            href={blog.url}
            target="_blank"
            rel="noreferrer"
            data-no-scramble
            className="flex flex-col gap-2 text-sm no-link-style sm:flex-row sm:justify-between sm:gap-4">
            <span className="inline-block text-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2 will-change-transform">
              {blog.title}
            </span>

            <time className="text-text sm:shrink-0">{blog.year}</time>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function BlogSection() {
  return (
    <section className="mt-16" aria-labelledby="blogs-heading">
      <h2 id="blogs-heading" className="text-sm text-text">blogs</h2>

      <div className="mt-4">
        <Blogs />
      </div>
    </section>
  );
}

export default BlogSection;
