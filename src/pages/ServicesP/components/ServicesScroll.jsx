import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      text: "Our PPC advertising services focus on delivering maximum ROI by ensuring your ads reach the right audience at the right time. From Google Ads to social platforms, we handle everything: strategy, keyword targeting, copywriting, bid management, and ongoing optimization. We don't just drive clicks—we drive meaningful traffic that converts into sales and measurable business outcomes.",
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
      text: "We design personalized, data-driven email campaigns that speak directly to your customers' needs. Beyond promotions, our campaigns include onboarding sequences, re-engagement emails, and lifecycle automation that foster stronger relationships. Our goal is to increase retention, nurture leads effectively, and keep your audience connected to your brand over the long term.",
      image: "/email.jpg",
      color: "indigo",
    },
    {
      id: 6,
      title: "Analytics And Reporting",
      text: "Data is at the core of every successful digital strategy. We provide clear, actionable insights through detailed analytics and custom reports that help you understand what's working and what needs refinement. With regular updates, KPIs, and performance dashboards, we empower you to make informed decisions and continuously improve your campaigns.",
      image: "/analytics.jpg",
      color: "purple",
    },
    {
      id: 7,
      title: "Brand Design & Consultation",
      text: "Your brand is more than just a logo—it's the story, emotions, and values that connect you with your audience. We help you establish a strong identity through strategic consultation, visual design, and consistent messaging. From logo design and brand guidelines to tone of voice, we ensure every touchpoint reflects your unique essence and resonates with your target market.",
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
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Smoother intersection observer settings
    const rootMarginValue = `${Math.floor(
      window.innerHeight * -0.45
    )}px 0px ${Math.floor(window.innerHeight * -0.45)}px 0px`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { 
        threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for smoother detection
        rootMargin: rootMarginValue 
      }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  // Preload images for smoother transitions
  useEffect(() => {
    sections.forEach((section) => {
      const img = new Image();
      img.src = section.image;
    });
  }, []);

  const getColorClasses = (colorName) => {
    switch (colorName.toLowerCase()) {
      case "blue":
        return {
          bg: "bg-blue-900",
          ring: "ring-blue-600/70",
          text: "text-blue-700",
          button: "bg-blue-600 hover:bg-blue-700",
        };
      case "pink":
        return {
          bg: "bg-pink-800",
          ring: "ring-pink-600/70",
          text: "text-pink-700",
          button: "bg-pink-600 hover:bg-pink-700",
        };
      case "gray":
        return {
          bg: "bg-gray-800",
          ring: "ring-gray-600/70",
          text: "text-gray-700",
          button: "bg-gray-600 hover:bg-gray-700",
        };
      case "black":
        return {
          bg: "bg-black",
          ring: "ring-gray-400/70",
          text: "text-gray-900",
          button: "bg-gray-900 hover:bg-black",
        };
      case "indigo":
        return {
          bg: "bg-indigo-900",
          ring: "ring-indigo-600/70",
          text: "text-indigo-700",
          button: "bg-indigo-600 hover:bg-indigo-700",
        };
      case "purple":
        return {
          bg: "bg-purple-900",
          ring: "ring-purple-600/70",
          text: "text-purple-700",
          button: "bg-purple-600 hover:bg-purple-700",
        };
      case "teal":
        return {
          bg: "bg-teal-800",
          ring: "ring-teal-600/70",
          text: "text-teal-700",
          button: "bg-teal-600 hover:bg-teal-700",
        };
      case "green":
        return {
          bg: "bg-green-900",
          ring: "ring-green-600/70",
          text: "text-green-700",
          button: "bg-green-600 hover:bg-green-700",
        };
      default:
        return {
          bg: "bg-gray-900",
          ring: "ring-indigo-500/70",
          text: "text-indigo-700",
          button: "bg-indigo-600 hover:bg-indigo-700",
        };
    }
  };

  const currentColors = getColorClasses(sections[activeIndex].color);
  const currentBgColorClass = currentColors.bg;

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }, // Custom easing
    },
  };

  const textFadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <div className="relative scroll-smooth">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Smooth scrolling for all browsers */
        * {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>

      {/* Progress Indicator */}
      <div className="fixed top-1/2 -translate-y-1/2 right-8 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => {
              sectionRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }}
            className={`group relative transition-all duration-300 ${
              index === activeIndex ? "scale-110" : "scale-100"
            }`}
            aria-label={`Go to ${section.title}`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeIndex
                  ? `${currentColors.button} w-3 h-3 shadow-lg`
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
            {/* Tooltip on hover */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                {section.title}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen" ref={scrollContainerRef}>
        {/* Content Side */}
        <div className="space-y-10 md:space-y-32 lg:space-y-48 p-6 md:p-12 lg:p-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
          {/* Header */}
          <motion.div
            className="pt-16 md:pt-32 lg:pt-48"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Our Digital Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              A strategic approach to growing your business, one scroll at a time.
            </p>
          </motion.div>

          {/* Service Sections */}
          {sections.map((section, i) => {
            const sectionColors = getColorClasses(section.color);
            const isActive = i === activeIndex;

            return (
              <motion.article
                key={section.id}
                ref={(el) => (sectionRefs.current[i] = el)}
                data-index={i}
                className={`
                  min-h-[60vh] lg:min-h-[100vh] 
                  bg-white rounded-2xl shadow-lg 
                  ring-2 ${sectionColors.ring}
                  lg:bg-transparent lg:ring-0 lg:shadow-none 
                  flex flex-col justify-center 
                  max-w-3xl lg:mx-0
                  transition-all duration-700 ease-out
                  ${isActive ? "opacity-100" : "opacity-60 lg:opacity-100"}
                `}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4, margin: "0px 0px -100px 0px" }}
                variants={containerVariants}
              >
                <div className="p-6 md:p-10 lg:p-12">
                  {/* Number Badge */}
                  <motion.div
                    className="inline-flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${sectionColors.button} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className={`w-16 h-px ${sectionColors.button}`} />
                  </motion.div>

                  {/* Title */}
                  <motion.h2
                    className={`
                      text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 
                      tracking-tight transition-all duration-700
                      ${isActive ? sectionColors.text : "text-gray-900"}
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {section.title}
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    className={`
                      text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8
                      transition-all duration-700
                      ${isActive ? "text-gray-800" : "text-gray-600"}
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {section.text}
                  </motion.p>

                  {/* Mobile Image */}
                  <motion.div 
                    className="lg:hidden mb-6 rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* CTA Button */}
                  <motion.a
                    href="/contact"
                    className={`
                      inline-flex items-center gap-2 
                      px-6 md:px-8 py-3 md:py-4 
                      ${sectionColors.button}
                      text-white rounded-xl font-semibold
                      transition-all duration-300
                      shadow-lg hover:shadow-xl
                      group
                    `}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Contact Us</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Sticky Image Side (Desktop Only) */}
        <motion.div
          key={currentBgColorClass}
          className={`
            hidden lg:flex items-center justify-center 
            sticky top-0 h-screen w-full p-8
            transition-colors duration-1000 ease-in-out
            ${currentBgColorClass}
          `}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={sections[activeIndex].image}
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.1, 0.25, 1] // Smooth cubic-bezier easing
              }}
            >
              {/* Image */}
              <img
                src={sections[activeIndex].image}
                alt={sections[activeIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Image Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sections[activeIndex].id + "-badge"}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
                    variants={textFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Service Focus
                    </span>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.h3
                    key={sections[activeIndex].id + "-title"}
                    className="text-4xl lg:text-5xl font-bold leading-tight drop-shadow-2xl mb-3"
                    variants={textFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {sections[activeIndex].title}
                  </motion.h3>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={sections[activeIndex].id + "-desc"}
                    className="text-lg text-gray-200 max-w-xl"
                    variants={textFadeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {sections[activeIndex].text.substring(0, 120)}...
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Service Number Overlay */}
              <div className="absolute top-8 right-8">
                <motion.div
                  className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.3, 
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <span className="text-white font-bold text-lg">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesScroll;