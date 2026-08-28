import Link from "next/link";

const blogs = [
  {
    id: 0,
    year: "Oct. 2025",
    title: "Nesting GitHub repos with Git Submodules",
    url: "https://hashnode.com/edit/cmh4sucpj000102lb4hbm7ivw",
  },
  {
    id: 1,
    year: "Aug. 2025",
    title:
      "How to Split Your UI into React Components: Finding the Right Balance",
    url: "https://hashnode.com/edit/cmeiterl0000b02l1gky42y67",
  },
];

function Blogs() {
  return (
    <ul>
      {blogs.map((blog) => (
        <li
          key={blog.id}
          className="border-b border-[#2c2b2b] last:border-b-0"
        >
          <Link
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-link-style flex flex-col gap-1 py-3 text-sm transition-all duration-500 ease-in-out hover:pl-2 first:pt-0 sm:flex-row sm:justify-between sm:gap-4"
          >
            <span className="text-white">{blog.title}</span>

            <time className="shrink-0 text-text">{blog.year}</time>
          </Link>
        </li>
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
