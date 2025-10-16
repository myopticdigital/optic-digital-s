import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, TrendingUp, Globe } from "lucide-react";

const CultureSection = () => {
  const values = [
    {
      title: "Collaboration",
      description:
        "We thrive on teamwork, where ideas flow freely and everyone has a voice.",
      icon: <Users className="w-8 h-8 text-pink-500" />,
      colorClass: "text-pink-600 bg-pink-100/70 hover:bg-pink-100",
    },
    {
      title: "Innovation",
      description:
        "We embrace curiosity and creative problem-solving to shape the future.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
      colorClass: "text-yellow-600 bg-yellow-100/70 hover:bg-yellow-100",
    },
    {
      title: "Growth",
      description:
        "We invest in continuous learning and personal development for every employee.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      colorClass: "text-green-600 bg-green-100/70 hover:bg-green-100",
    },
    {
      title: "Diversity & Inclusion",
      description:
        "We celebrate different perspectives and create an environment where everyone belongs.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      colorClass: "text-blue-600 bg-blue-100/70 hover:bg-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[22px] md:text-[30px] font-extrabold text-gray-900"
        >
          Our Core Culture
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-5 text-lg text-gray-500 max-w-3xl mx-auto"
        >
          At Optic Digital, we believe people do their best work when they’re
          empowered, inspired, and supported. Our culture is built on values
          that drive excellence and innovation.
        </motion.p>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="p-6 rounded-xl  shadow transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 mx-auto rounded-full mb-6 ${value.colorClass} transition-colors duration-300`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  {React.cloneElement(value.icon, {
                    className: `w-7 h-7 ${value.colorClass.split(" ")[0]}`,
                  })}
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>

              <p className="mt-3 text-gray-500 font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
