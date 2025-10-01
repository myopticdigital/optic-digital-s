import React from "react";

const Form = () => {
  return (
    <form className="flex-1 flex items-start flex-col bg-white text-black">
      <div className="flex items-center gap-10 w-full">
        <div className=" flex-col flex items-start">
          <label htmlFor="fname" className="text-sm text-[#717171]">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className=" border-b-[#717171]/35 border-b-2 py-3 focus:outline-0"
          />
        </div>
        <div className=" flex-col flex items-start">
          <label htmlFor="lname" className="text-sm text-[#717171]">
           Last Name (optional)
          </label>
          <input
            type="text"
            name="lname"
            className=" border-b-[#717171]/35 border-b-2 py-3 focus:outline-0"
          />
        </div>
      </div>
      <div className="flex items-center gap-10 w-full">
        <div className=" flex-col flex items-start">
          <label htmlFor="email" className="text-sm text-[#717171]">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            placeholder="israelyaya0@gmail.com"
            className=" border-b-[#717171]/35  border-b-2 py-3 focus:outline-0"
          />
        </div>
        <div className=" flex-col flex items-start">
          <label htmlFor="lname" className="text-sm text-[#717171]">
           Last Name (optional)
          </label>
          <input
            type="text"
            name="lname"
            className=" border-b-[#717171]/35 border-b-2 py-3 focus:outline-0"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
