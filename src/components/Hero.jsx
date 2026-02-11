import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id='home' className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ritesh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Passionate Computer Science Engineer building responsive, data-driven
            web experiences and AI/ML automation tools.
          </p>
          <p className='mt-4 text-sm text-white-100 space-x-2'>
            <span>+91-7007436164</span>
            <span className='text-secondary'>|</span>
            <span>rgiri5001@gmail.com</span>
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a
              href='#contact'
              className='bg-[#915EFF] text-white px-5 py-2 rounded-lg text-sm font-medium border border-[#915EFF] transition hover:bg-transparent'
            >
              Let's Talk
            </a>
            <a
              href='https://api.whatsapp.com/send/?phone=%2B917007436164&text=Hello%2C+Ihou+are+you&type=phone_number&app_absent=0'
              className='bg-transparent border border-white text-white px-5 py-2 rounded-lg text-sm font-medium transition hover:bg-white hover:text-black'
              target='_blank'
              rel='noreferrer'
            >
              WhatsApp
            </a>
            <a
              href='https://github.com/ritesh5001'
              className='bg-transparent border border-white text-white px-5 py-2 rounded-lg text-sm font-medium transition hover:bg-white hover:text-black'
              target='_blank'
              rel='noreferrer'
            >
              View GitHub
            </a>
            <a
              href='/resume.pdf'
              className='bg-transparent border border-white text-white px-5 py-2 rounded-lg text-sm font-medium transition hover:bg-white hover:text-black'
              target='_blank'
              rel='noreferrer'
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
