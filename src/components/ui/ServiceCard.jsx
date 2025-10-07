import { motion } from 'framer-motion'
import React from 'react'

const ServiceCard = ({
    icon,
    serviceTitle,
    bodyText,
    index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className='flex cursor-default flex-col items-start max-w-80 gap-3 p-4 bg-[#F4F4F4] rounded-[20px] transition-shadow duration-300'
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className='bg-white p-3 rounded-xl'
      >
        {icon}
      </motion.div>
      
      <h3 className='font-neue capitalize font-medium text-lg'> {/* Changed from text-2xl to text-lg (18px) */}
        {serviceTitle}
      </h3>

      <p className='text-[#575757] text-xs leading-relaxed'>{bodyText}</p> {/* Added text-xs (12px) and leading-relaxed */}
    </motion.div>
  )
}

export default ServiceCard