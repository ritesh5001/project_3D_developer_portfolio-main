import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education, certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Education = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Learning Journey</p>
      <h2 className={styles.sectionHeadText}>Education & Certifications.</h2>
    </motion.div>

    <div className='mt-10 grid gap-6'>
      {education.map((edu, index) => (
        <motion.div
          key={edu.degree}
          variants={fadeIn("up", "spring", index * 0.3, 0.75)}
          className='bg-black-200 p-6 rounded-2xl border border-white/10'
        >
          <div className='flex flex-wrap justify-between items-start gap-3'>
            <h3 className='text-white text-[20px] font-semibold'>{edu.degree}</h3>
            <p className='text-secondary text-sm'>{edu.period}</p>
          </div>
          <p className='text-secondary text-[15px] mt-3'>{edu.institution}</p>
          <p className='text-white text-[14px] mt-4 leading-[22px]'>
            {edu.details}
          </p>
        </motion.div>
      ))}
    </div>

    <div className='mt-10'>
      <p className={styles.sectionSubText}>Certifications</p>
      <div className='mt-6 grid gap-6 sm:grid-cols-2'>
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={fadeIn("up", "spring", (index + 3) * 0.2, 0.75)}
            className='bg-black-200 p-6 rounded-2xl border border-white/10'
          >
            <div className='flex flex-wrap justify-between items-start gap-3'>
              <h3 className='text-white text-[18px] font-semibold'>{cert.title}</h3>
              <p className='text-secondary text-sm'>{cert.period}</p>
            </div>
            <p className='text-secondary text-[14px] mt-3 leading-[22px]'>
              {cert.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </>
);

export default SectionWrapper(Education, "education");
