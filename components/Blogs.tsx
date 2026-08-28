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
    <ul>
      {blogs.map((blog) => (
        <Link
          key={blog.id}
          href={blog.url}
          target="_blank"
          className="flex flex-col gap-2 border-b border-[#2c2b2b] py-3 text-sm first:pt-0 last:border-b-0 no-link-style transition-all duration-500 ease-in-out hover:pl-2 sm:flex-row sm:justify-between sm:gap-4"
        >
          <span className="text-white">{blog.title}</span>

          <time className="text-text sm:shrink-0">{blog.year}</time>
        </Link>
      ))}
    </ul>
  );
}

function BlogSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-text">blogs</h2>

      <div className="mt-4">
        <Blogs />
      </div>
    </section>
  );
}

export default BlogSection;
