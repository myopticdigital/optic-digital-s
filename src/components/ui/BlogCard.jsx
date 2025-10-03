import React from "react";
import { useBlogStore } from "../../utils/useBlogStore";
import { useNavigate } from "react-router";

const BlogCard = ({ image, title, author, authorImage, date, id }) => {
  const setId = useBlogStore((state) => state.setId)
  const navigate = useNavigate();

  const handleClick = () => {
    setId(id);
    navigate(`/blogs/${id}`)
  }
  return (
    <div onClick={handleClick} className="flex flex-col items-start gap-3 p-3 border max-w-[397px] max-h-[444px] overflow-hidden rounded-2xl border-[#DADADA]">
      
      <img src={image} className="rounded-xl w-full h-48 object-cover" alt={title} />

      
      <h3 className="font-semibold text-[24px] leading-[28px] max-w-[340px] line-clamp-2">
        {title}
      </h3>

      
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2">
          <img src={authorImage} className="w-10 h-10 rounded-full object-cover" alt={author} />
          <p className="font-medium text-[16px]">{author}</p>
        </div>
        <p className="text-[#969696]">{date}</p>
      </div>
    </div>
  );
};

export default BlogCard;
