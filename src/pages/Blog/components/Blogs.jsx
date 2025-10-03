import React from "react";
import BlogCard from "../../../components/ui/BlogCard";
import { blogs } from "../../../utils/blogs";

const Blogs = () => {
  return (
    <div className="py-7 px-5 flex flex-col gap-4">
      <div className="flex gap-3 flex-wrap">
        {blogs.map((blog) => (
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
      <div className="flex items-center justify-center">
        <button className="cursor-pointer font-neue border hover:bg-primaryPurple hover:text-white transition duration-300  text-center border-primaryPurple px-6 py-3 text-primaryPurple rounded-4xl font-medium">
          view all posts
        </button>
      </div>{" "}
    </div>
  );
};

export default Blogs;
