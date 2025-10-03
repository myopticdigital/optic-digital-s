import React from "react";
const Form = () => {
  return (
    <form className="flex-1 flex items-start py-7 px-4 gap-6 flex-col text-black">
      <div className="flex items-start gap-8 w-full">
        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="fname" className="text-sm text-gray-500 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>
        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="lname" className="text-sm text-gray-500 mb-2">
            Last Name (optional)
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>
      </div>
      <div className="flex items-start gap-8 w-full">
        <div className="flex-1 gap-5 md:gap-0 flex-col flex items-start">
          <label htmlFor="email" className="text-sm text-gray-500 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="israelyaya0@gmail.com"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors placeholder-gray-400"
          />
        </div>
        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="phone" className="text-sm text-gray-500 mb-2">
            Phone number (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="message" className="text-sm text-gray-500 mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          className="border-2 resize-none border-gray-300 w-full rounded-lg p-3 focus:outline-none focus:border-purple-600 transition-colors "
        ></textarea>
      </div>

      <input type="button" value="Submit" className="bg-primaryPurple w-32 text-white px-5 py-3 rounded-xl  " />
    </form>
  );
};
export default Form;