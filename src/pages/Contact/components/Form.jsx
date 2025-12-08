import React, { useState } from "react";

const Form = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validate = (formData) => {
    let newErrors = {};

    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    const formErrors = validate(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex items-start py-7 px-4 gap-6 flex-col text-black"
    >
      {submitStatus === "success" && (
        <div className="w-full p-4 bg-green-100 text-green-700 rounded-lg">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="w-full p-4 bg-red-100 text-red-700 rounded-lg">
          Failed to send message. Please try again.
        </div>
      )}

      <div className="flex items-start gap-8 w-full">
        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="fname" className="text-sm text-gray-500 mb-2">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Optic"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors"
          />
          {errors.fname && <p className="text-red-500 text-xs">{errors.fname}</p>}
        </div>

        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="lname" className="text-sm text-gray-500 mb-2">
            Last Name (optional)
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Digital"
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
            placeholder="myopticdigital@gmail.com"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors placeholder-gray-400"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div className="flex-1 flex-col flex items-start">
          <label htmlFor="phone" className="text-sm text-gray-500 mb-2">
            Phone number (optional)
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+2349164588817"
            className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-purple-600 transition-colors"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
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
          className="border-2 resize-none border-gray-300 w-full rounded-lg p-3 focus:outline-none focus:border-purple-600 transition-colors"
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-primaryPurple w-32 cursor-pointer text-white px-5 py-3 rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
};

export default Form;