import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { wordpressProjects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Navbar from "./Navbar";

const WordPressCard = ({ project, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.25, 0.75)}
    className='w-full sm:w-[320px]'
  >
    <Tilt
      options={{
        max: 35,
        scale: 1,
        speed: 500,
      }}
      className='bg-tertiary p-5 rounded-2xl h-full flex flex-col justify-between'
    >
      <div className='flex-1'>
        <p className='text-[12px] text-secondary uppercase tracking-[4px]'>{project.focus}</p>
        <h3 className='text-white font-bold text-[20px] mt-3'>{project.name}</h3>
        <p className='mt-3 text-secondary text-[14px] leading-[24px]'>{project.description}</p>
      </div>

      <div className='mt-4'>
        <button
          type='button'
          onClick={() => window.open(project.url, "_blank")}
          className='w-full text-[14px] px-3 py-2 border border-secondary rounded-lg text-secondary hover:border-white hover:text-white transition-colors'
        >
          Visit site
        </button>
      </div>
    </Tilt>
  </motion.div>
);

const WordPressProjectsBody = () => {
  const navigate = useNavigate();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WordPress Portfolio</p>
        <h2 className={styles.sectionHeadText}>60+ WordPress Websites</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Select case studies from the WordPress catalog showcase a balance of storytelling, performance, and automation so clients can see the depth of the CMS work.
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-7'>
        {wordpressProjects.map((project, index) => (
          <WordPressCard key={`wp-${project.name}`} project={project} index={index} />
        ))}
      </div>

      <div className='mt-10 flex justify-center'>
        <button
          type='button'
          onClick={() => navigate("/")}
          className='px-6 py-3 border border-secondary rounded-full text-sm text-secondary hover:border-white hover:text-white transition-colors'
        >
          Back to main portfolio
        </button>
      </div>
    </>
  );
};

const WrappedWordPressProjects = SectionWrapper(
  WordPressProjectsBody,
  "wordpress-projects"
);

const WordPressProjects = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
    </div>
    <WrappedWordPressProjects />
  </div>
);

export default WordPressProjects;
