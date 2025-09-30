import React from "react";
import {
  Analytic,
  Code,
  ContentIcon,
  Design,
  EmailIcon,
  MessageIcon,
  PpcIcon,
  SearchIcon,
} from "../../../assets/svgs/svg";
import ServiceCard from "../../../components/ui/ServiceCard";
import { motion } from "framer-motion";

const OurServices = () => {
  const services = [
    {
      icon: <SearchIcon />,
      title: "Search Engine  Optimization (SEO)",
      bodyText:
        "Elevate your website's visibility  and rankings across major search  engines to attract organic traffic  and enhance online  discoverability.",
    },

    {
      icon: <MessageIcon />,
      title: "Social Media Management",
      bodyText:
        "Craft compelling narratives and  engage your audience on platforms  like Instagram, Twitter, and  Facebook. Our strategies drive  brand loyalty and conversion.",
    },

    {
      icon: <PpcIcon />,
      title: "Pay-Per-Click (PPC) Advertising",
      bodyText:
        "Targeted and cost-effective ad  campaigns to maximize ROI,  reaching your audience at the  right moment with compelling ad  copies.",
    },

    {
      icon: <ContentIcon />,
      title: "Content Marketing",
      bodyText:
        "Develop and distribute relevant,  high-quality content to build brand  authority, foster trust, and drive  customer engagement.",
    },

    {
      icon: <EmailIcon />,
      title: "Email Marketing",
      bodyText:
        "Personalized and strategic email  campaigns that nurture leads,  enhance customer retention, and  drive conversions.",
    },

    {
      icon: <Analytic />,
      title: "Analytics and reporting",
      bodyText:
        "Transparent and actionable  insights through regular analytics  reports, ensuring continuous  optimization of your digital  strategy",
    },

    {
      icon: <Design />,
      title: "Brand Design & Consultation",
      bodyText:
        "We help businesses create a strong, memorable brand identity through strategy, design, and ongoing consultation that connects with their target audience.",
    },

    {
      icon: <Code />,
      title: "Web & App Development",
      bodyText:
        "Build and manage modern, user-friendly websites and apps that deliver seamless performance, enhance customer experience, and support business growth.",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  return (
    <div className="bg-white py-7 flex items-start gap-16 justify-center">
      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
          className="max-w-80 text-[16px] sticky top-24"
        >
          <motion.h1 
            className="capitalize text-[36px] font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          
          <motion.p 
            className="leading-6 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We bring together strategy, storytelling, and design to deliver
            marketing that works. Our services include
          </motion.p>

          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-6"
          />
        </motion.div>

      {/* Services container */}
      <div className="grid grid-cols-2 gap-4">
        {
            services.map((service, i) => (
                <ServiceCard bodyText={service.bodyText} index={i} icon={service.icon} serviceTitle={service.title} key={i} />
            ))
        }
      </div>
    </div>
  );
};

export default OurServices;
