import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesScroll = () => {
  const sections = [
    {
      id: 1,
      title: "Search Engine Optimization (SEO)",
      text: "Our SEO strategies go beyond keyword rankings. We focus on building a strong, sustainable online presence for your brand by optimizing both on-page and off-page elements. From in-depth keyword research, site audits, and technical optimization to link building and local SEO, we ensure your business becomes more discoverable and drives consistent, qualified traffic that converts into long-term growth.",
      image: "/seo.jpg",
      color: "blue",
    },
    {
      id: 2,
      title: "Social Media Management",
      text: "We help your brand craft meaningful stories that connect with your audience across platforms like Instagram, Facebook, LinkedIn, and Twitter. Our approach combines engaging content creation, community management, analytics, and paid campaigns. The result is not just increased visibility but also stronger customer loyalty, community growth, and measurable business impact.",
      image: "/social-media.jpg",
      color: "pink",
    },
    {
      id: 3,
      title: "Pay-Per-Click (PPC) Advertising",
      text: "Our PPC advertising services focus on delivering maximum ROI by ensuring your ads reach the right audience at the right time. From Google Ads to social platforms, we handle everything: strategy, keyword targeting, copywriting, bid management, and ongoing optimization. We don’t just drive clicks—we drive meaningful traffic that converts into sales and measurable business outcomes.",
      image: "/ppc.jpg",
      color: "gray",
    },
    {
      id: 4,
      title: "Content Marketing",
      text: "Content is the backbone of modern marketing. We create high-quality, research-driven content that educates, informs, and engages your audience. From blog articles and case studies to videos, infographics, and email newsletters, our goal is to position your brand as a trusted authority. Great content nurtures leads, builds trust, and inspires action.",
      image: "/content.jpg",
      color: "black",
    },
    {
      id: 5,
      title: "Email Marketing",
      text: "We design personalized, data-driven email campaigns that speak directly to your customers’ needs. Beyond promotions, our campaigns include onboarding sequences, re-engagement emails, and lifecycle automation that foster stronger relationships. Our goal is to increase retention, nurture leads effectively, and keep your audience connected to your brand over the long term.",
      image: "/email.jpg",
      color: "indigo",
    },
    {
      id: 6,
      title: "Analytics And Reporting",
      text: "Data is at the core of every successful digital strategy. We provide clear, actionable insights through detailed analytics and custom reports that help you understand what’s working and what needs refinement. With regular updates, KPIs, and performance dashboards, we empower you to make informed decisions and continuously improve your campaigns.",
      image: "/analytics.jpg",
      color: "purple",
    },
    {
      id: 7,
      title: "Brand Design & Consultation",
      text: "Your brand is more than just a logo—it’s the story, emotions, and values that connect you with your audience. We help you establish a strong identity through strategic consultation, visual design, and consistent messaging. From logo design and brand guidelines to tone of voice, we ensure every touchpoint reflects your unique essence and resonates with your target market.",
      image: "/branding.jpg",
      color: "teal",
    },
    {
      id: 8,
      title: "Web & App Development",
      text: "We design and build modern, scalable, and user-friendly websites and mobile applications that enhance customer experience and support your business growth. Our development process combines aesthetics, functionality, and performance, ensuring every digital product is responsive, accessible, and optimized for conversions. Whether you need a corporate site, e-commerce platform, or custom application, we bring your vision to life.",
      image: "/web-dev.jpg",
      color: "green",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const rootMarginValue = `${Math.floor(
      window.innerHeight * -0.4
    )}px 0px ${Math.floor(window.innerHeight * -0.4)}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },

      { threshold: 0, rootMargin: rootMarginValue }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // --- NEW UTILITY FUNCTION TO HANDLE DYNAMIC COLOR CLASSES ---
  const getColorClasses = (colorName) => {
    switch (colorName.toLowerCase()) {
      case "blue":
        return {
          bg: "bg-blue-900",
          ring: "ring-blue-600/70",
          text: "text-blue-700",
        };
      case "pink":
        return {
          bg: "bg-pink-800",
          ring: "ring-pink-600/70",
          text: "text-pink-700",
        };
      case "gray":
        return {
          bg: "bg-gray-800",
          ring: "ring-gray-600/70",
          text: "text-gray-700",
        };
      case "black":
        return {
          bg: "bg-black",
          ring: "ring-gray-400/70",
          text: "text-gray-900",
        };
      case "indigo":
        return {
          bg: "bg-indigo-900",
          ring: "ring-indigo-600/70",
          text: "text-indigo-700",
        };
      case "purple":
        return {
          bg: "bg-purple-900",
          ring: "ring-purple-600/70",
          text: "text-purple-700",
        };
      case "teal":
        return {
          bg: "bg-teal-800",
          ring: "ring-teal-600/70",
          text: "text-teal-700",
        };
      case "green":
        return {
          bg: "bg-green-900",
          ring: "ring-green-600/70",
          text: "text-green-700",
        };
      default:
        return {
          bg: "bg-gray-900",
          ring: "ring-indigo-500/70",
          text: "text-indigo-700",
        };
    }
  };

  const currentColors = getColorClasses(sections[activeIndex].color);
  const currentBgColorClass = currentColors.bg;

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="space-y-10 md:space-y-48 p-8 md:p-20 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="pt-24 md:pt-48">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tightest mb-4">
            Our Digital Services
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            A strategic approach to growing your business, one scroll at a time.
          </p>
        </div>

        {sections.map((section, i) => {
          // Get specific color classes for the current section
          const sectionColors = getColorClasses(section.color);
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={section.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              className={`md:h-[120vh] bg-white rounded-xl shadow ring-2 ${sectionColors.ring} md:bg-transparent md:ring-0 md:shadow-none flex flex-col justify-center max-w-2xl md:mx-0`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={containerVariants}
            >
              <div
                className={`
                  transition-all duration-500
                  p-8 md:p-10 rounded-3xl w-full
                 
                `}
              >
                <h2
                  className={`text-3xl md:text-4xl font-black mb-4 tracking-tight transition-colors duration-500 ${
                    isActive ? sectionColors.text : "text-gray-900"
                  }`}
                >
                  {section.title}
                </h2>
                <motion.p
                  className={`text-lg md:text-xl leading-relaxed transition-colors duration-500 ${
                    isActive ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {section.text}
                </motion.p>

                <button className={`cursor-pointer hidden md:block hover:opacity-75 transition-all duration-300 font-neue ${sectionColors.bg} px-6 py-3 text-white rounded-4xl font-medium`}>
                  <a href="/contact">Contact us</a>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        key={currentBgColorClass}
        className={`hidden md:flex items-center justify-center sticky top-0 h-screen w-full p-6 transition-colors duration-700 ease-in-out ${currentBgColorClass}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={sections[activeIndex].image}
            className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={sections[activeIndex].image}
              alt={sections[activeIndex].title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
              <AnimatePresence mode="wait">
                <motion.span
                  key={sections[activeIndex].id + "-span"}
                  className="text-indigo-400 font-semibold uppercase tracking-widest text-sm mb-1 block"
                  variants={textFadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Service Focus
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.h3
                  key={sections[activeIndex].id + "-title"}
                  className="text-4xl font-bold leading-tight drop-shadow-lg"
                  variants={textFadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {sections[activeIndex].title}
                </motion.h3>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ServicesScroll;
