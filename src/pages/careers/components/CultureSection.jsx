import React from "react";
import { Users, Lightbulb, TrendingUp, Globe } from "lucide-react";

const CultureSection = () => {
  const values = [
    {
      title: "Collaboration",
      description:
        "We thrive on teamwork, where ideas flow freely and everyone has a voice.",
      icon: <Users className="w-8 h-8 text-pink-500" />,
    },
    {
      title: "Innovation",
      description:
        "We embrace curiosity and creative problem-solving to shape the future.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Growth",
      description:
        "We invest in continuous learning and personal development for every employee.",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Diversity & Inclusion",
      description:
        "We celebrate different perspectives and create an environment where everyone belongs.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Our Culture
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At Optic digital, we believe people do their best work when they’re
          empowered, inspired, and supported. Our culture is built on values that
          bring out the best in every team member.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-gray-100 mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
