import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ achievement, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className='bg-black-200 p-6 rounded-2xl border border-white/10'
  >
    <p className='text-secondary text-[12px] uppercase tracking-[2px]'>
      #{String(index + 1).padStart(2, "0")}
    </p>
    <h3 className='text-white text-[20px] font-semibold mt-3'>
      {achievement.title}
    </h3>
    <p className='text-secondary text-[14px] mt-3 leading-[22px]'>
      {achievement.description}
    </p>
  </motion.div>
);

const Achievements = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Wins & Recognition</p>
      <h2 className={styles.sectionHeadText}>Achievements.</h2>
    </motion.div>

    <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {achievements.map((achievement, index) => (
        <AchievementCard
          key={achievement.title}
          index={index}
          achievement={achievement}
        />
      ))}
    </div>
  </>
);

export default SectionWrapper(Achievements, "achievements");
