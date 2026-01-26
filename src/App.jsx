import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Achievements,
  Contact,
  Education,
  Experience,
  Hero,
  Navbar,
  Skills,
  Works,
  StarsCanvas,
  WordPressProjects,
} from "./components";

const App = () => {
  const HomeContent = () => (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <Education />
      <Skills />
      <Achievements />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeContent />} />
        <Route path='/wordpress-projects' element={<WordPressProjects />} />
        <Route path='*' element={<HomeContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
