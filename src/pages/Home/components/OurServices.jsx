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
  return (
    <div className="bg-white py-7 flex items-start gap-16 justify-center">
      <div className="max-w-80 text-[16px] sticky top-0 ">
        <h1 className="capitalize text-[36px] font-neue font-bold">
          Our services
        </h1>
        <p className="leading-6">
          We bring together strategy, storytelling, and design to deliver
          marketing that works. Our services include
        </p>
      </div>

      {/* Services container */}
      <div className="grid grid-cols-2 gap-4">
        {
            services.map((service, i) => (
                <ServiceCard bodyText={service.bodyText} icon={service.icon} serviceTitle={service.title} key={i} />
            ))
        }
      </div>
    </div>
  );
};

export default OurServices;
