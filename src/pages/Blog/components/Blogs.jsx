import React, { useState } from "react";
import BlogCard from "../../../components/ui/BlogCard";
import { blogs } from "../../../utils/blogs";

const Blogs = ({ searchValue }) => {
  const [isFiltered, setIsFiltered] = useState(true);

  const displayedBlogs = (isFiltered ? blogs.slice(0, 9) : blogs).filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchValue.trim().toLowerCase()) ||
      blog.author.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <div className="py-7 px-5 flex flex-col gap-4">
      {displayedBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {displayedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              authorImage={blog.authorImage}
              date={blog.date}
              id={blog.id}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">
          <p className="text-lg font-medium">No blogs found 😕</p>
          <p className="text-sm">Try searching with a different keyword.</p>
        </div>
      )}

      <div className="flex items-center justify-center mt-6">
        {isFiltered && blogs.length > 3 && (
          <button
            className="cursor-pointer font-neue border hover:bg-primaryPurple hover:text-white transition duration-300 text-center border-primaryPurple px-6 py-3 text-primaryPurple rounded-4xl font-medium"
            onClick={() => setIsFiltered(false)}
          >
            View all posts
          </button>
        )}
      </div>
    </div>
  );
};

export default Blogs;