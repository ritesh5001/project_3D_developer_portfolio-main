import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { fadeIn, slideIn, textVariant } from "../utils/motion";

const contactDetails = [
  {
    label: "Phone",
    value: "+91-7007436164",
    link: "tel:+917007436164",
  },
  {
    label: "Email",
    value: "rgiri5001@gmail.com",
    link: "mailto:rgiri5001@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ritesh-kumar-giri-5001",
    link: "https://www.linkedin.com/in/ritesh-kumar-giri-5001",
  },
  {
    label: "GitHub",
    value: "github.com/rgiri5001",
    link: "https://github.com/rgiri5001",
  },
];

const Contact = () => (
  <div
    className={`xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden`}
  >
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/10'
    >
      <motion.p variants={textVariant()} className={styles.sectionSubText}>
        Get in touch
      </motion.p>
      <motion.h3 variants={textVariant()} className={styles.sectionHeadText}>
        Contact.
      </motion.h3>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] leading-[28px]'
      >
        I am actively looking for opportunities as a Software Engineer or AI
        Developer. Please reach out to explore how we can build intelligent,
        scalable products together.
      </motion.p>
      <div className='mt-8 grid gap-4'>
        {contactDetails.map((contact) => (
          <motion.a
            key={contact.label}
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            href={contact.link}
            target='_blank'
            rel='noreferrer'
            className='flex flex-col gap-1 p-4 bg-black-200 rounded-2xl border border-white/5 hover:border-[#915EFF] transition'
          >
            <span className='text-secondary text-[12px] uppercase tracking-[3px]'>
              {contact.label}
            </span>
            <span className='text-white text-[16px] font-medium'>
              {contact.value}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>

    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
    >
      <EarthCanvas />
    </motion.div>
  </div>
);

export default SectionWrapper(Contact, "contact");
