import React from "react";
import {
  Clock,
  Heart,
  BookOpen,
  Umbrella,
  Users,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  const perks = [
    {
      title: "Flexible Work Options",
      description:
        "Choose remote, hybrid, or in-office work to fit your lifestyle.",
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive healthcare plans and wellness support.",
      icon: <Heart className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Learning & Development",
      description: "Courses, workshops, and budget for continuous growth.",
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Paid Time Off",
      description: "Generous vacation days and personal leave to recharge.",
      icon: <Umbrella className="w-8 h-8 text-teal-500" />,
    },
    {
      title: "Team Events",
      description: "Retreats, team outings, and regular fun activities.",
      icon: <Users className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Career Growth",
      description: "Clear paths for advancement and mentorship programs.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <section className="py-20 bg-primaryPurple">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[22px] md:text-[30px]  font-bold text-white"
        >
          Benefits & Perks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg text-white max-w-2xl mx-auto"
        >
          We take care of our team so they can do their best work. From flexible
          schedules to professional growth opportunities, we’re committed to
          making Optic Digital a place where people love to work.
        </motion.p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, index) => (
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
              className="bg-gray-50 cursor-default p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow mb-4">
                {perk.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {perk.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{perk.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
