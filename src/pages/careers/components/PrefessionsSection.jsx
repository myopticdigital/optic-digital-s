import React from "react";
import {
  Code,
  PenTool,
  Megaphone,
  Briefcase,
  Headphones,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const ProfessionsSection = () => {
  const professions = [
    {
      title: "Engineering & Development",
      description:
        "Build scalable products and solve complex technical problems.",
      icon: <Code className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Design (UI/UX, Graphics)",
      description: "Craft intuitive and visually stunning user experiences.",
      icon: <PenTool className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Marketing & Communications",
      description:
        "Tell our story, amplify our reach, and engage our audience.",
      icon: <Megaphone className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Sales & Business Development",
      description: "Drive growth by building meaningful client relationships.",
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Customer Success & Support",
      description: "Guide clients to succeed with personalized support.",
      icon: <Headphones className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Operations & HR",
      description: "Ensure smooth workflows and empower our people.",
      icon: <Settings className="w-8 h-8 text-gray-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      k
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[22px] md:text-[30px] capitalize font-bold text-gray-900"
        >
          Our Pillars of Strength
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          From creative thinkers to technical experts, we’re proud to bring
          together talent from a variety of disciplines.
        </motion.p>

        {/* Professions Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {professions.map((profession, index) => (
            <motion.div
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
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                {profession.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {profession.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {profession.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionsSection;
