import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  details_path,
  details_button_label,
  live_link,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        tiltMaxAngleX={35}
        tiltMaxAngleY={35}
        transitionSpeed={450}
        scale={1}
      >
        <div className='relative w-full h-[230px]'>
          <div
            onClick={() => window.open(live_link, "_blank")}
            className="w-full h-full cursor-pointer"
          >
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
            />
          </div>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover pointer-events-none'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer pointer-events-auto'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {details_path && (
          <div className='mt-6'>
            <button
              type='button'
              onClick={() => navigate(details_path)}
              className='text-[14px] text-[#9bd8ff] tracking-wide font-semibold uppercase hover:text-white transition-colors'
            >
              {details_button_label ?? "Explore WordPress builds"}
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Key Deliverables</p>
        <h2 className={`${styles.sectionHeadText}`}>Selected Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The highlights below show a memory-augmented AI assistant and a
          portfolio of high-impact client deliveries built with modern stacks,
          automation, and DevOps pipelines.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
