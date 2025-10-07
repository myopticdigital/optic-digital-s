import React, { useState, useEffect } from "react";
import { useBlogStore } from "../../utils/useBlogStore";
import ReactMarkdown from "react-markdown";
import { BookX } from "lucide-react";
import { blogs } from "../../utils/blogs";

const BlogDetail = () => {
  const { id } = useBlogStore();
  const [content, setContent] = useState("");
  const [error, setError] = useState(false);
  const [blogMeta, setBlogMeta] = useState(null);

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    const selectedBlog = blogs.find((b) => b.id === id);
    if (!selectedBlog) {
      setError(true);
      return;
    }

    setBlogMeta(selectedBlog); 

    const loadBlog = async () => {
      try {
        const res = await import(`../../utils/blogs/${selectedBlog.file}`);
        const response = await fetch(res.default);
        const text = await response.text();
        setContent(text);
        setError(false);
      } catch (err) {
        console.error("Blog not found:", err);
        setError(true);
      }
    };

    loadBlog();
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <BookX size={64} className="text-gray-400 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Blog Not Found
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          Sorry, we couldn’t find the blog you’re looking for. It may have been
          removed or doesn’t exist.
        </p>
        <a
          href="/blogs"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Back to Blogs
        </a>
      </div>
    );
  }

  return (
    <article className="prose lg:prose-lg mt-20 mx-5 md:mx-auto max-w-md md:max-w-4xl">
      {blogMeta && (
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{blogMeta.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <img
              src={blogMeta.authorImage}
              alt={blogMeta.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-gray-800">{blogMeta.author}</p>
              <p className="text-sm">{blogMeta.date}</p>
            </div>
          </div>
        </header>
      )}

      {content ? (
        <ReactMarkdown
          components={{
            hr: () => <div className="my-8" />,
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold mt-6 mb-3" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="leading-relaxed text-gray-700 mb-4" {...props} />
            ),
            img: ({ node, ...props }) => (
              <img
                className="w-full max-h-[400px] object-cover rounded-xl shadow-md my-6"
                {...props}
                alt={props.alt || ""}
              />
            ),
            a: ({ node, ...props }) => (
              <ak
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </article>
  );
};

export default BlogDetail;
