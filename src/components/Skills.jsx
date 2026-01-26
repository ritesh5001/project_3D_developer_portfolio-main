import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Skills = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Core Strengths</p>
      <h2 className={styles.sectionHeadText}>Skills.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
      A blended toolkit of programming languages, full-stack frameworks, AI/ML
      orchestration, and DevOps tooling that powers responsive, data-driven
      web experiences.
    </motion.p>

    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          className='bg-black-200 p-6 rounded-2xl border border-white/10'
        >
          <p className='text-white text-[18px] font-semibold'>{skill.name}</p>
          <p className='text-secondary text-[14px] mt-3 leading-[22px]'>
            {skill.detail}
          </p>
        </motion.div>
      ))}
    </div>
  </>
);

export default SectionWrapper(Skills, "skills");
