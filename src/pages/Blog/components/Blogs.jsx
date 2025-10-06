import React, { useState } from "react";
import BlogCard from "../../../components/ui/BlogCard";
import { blogs } from "../../../utils/blogs";

const Blogs = ({ searchValue }) => {
  const [isFiltered, setIsFiltered] = useState(true);

  
  const displayedBlogs = (isFiltered ? blogs.slice(0, 3) : blogs).filter((blog) =>
    blog.title.toLowerCase().includes(searchValue.trim().toLowerCase())
  );

  return (
    <div className="py-7 px-5 flex flex-col gap-4">
      <div className="flex gap-3 flex-wrap justify-center">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              author={blog.author}
              authorImage={blog.authorImage}
              date={blog.date}
              id={blog.id}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 py-10">
            <p className="text-lg font-medium">No blogs found 😕</p>
            <p className="text-sm">Try searching with a different keyword.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mt-6">
        {isFiltered && (
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
