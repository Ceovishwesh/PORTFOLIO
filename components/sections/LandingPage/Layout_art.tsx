"use client";

import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import Fake from './fake';
import MyName from './my-name';
import Resume from './resume';
import { BACKGROUND_PATTERN } from '@/components/patterns';


export default function LayoutArt() {
  return (
    // Add a wrapper div for the background pattern
    <div 
      className="w-full h-screen flex items-center justify-center"
      style={{
        backgroundColor: 'var(--background)', // Use CSS variable for theme support
        backgroundImage: BACKGROUND_PATTERN,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      {/* Add a backdrop filter wrapper for better contrast */}
      <div className="backdrop-blur-[1px] p-8 rounded-lg">
        <div className="w-[500px] h-[520px]">
          <div className="relative w-full h-full bg-[#fff] shadow-2xl">
            {/* Vertical lines */}
            <div className="absolute left-[62.5%] top-0 bottom-0 w-[9px] bg-[#000] z-10" />
            
            {/* Horizontal lines */}
            <div className="absolute top-[25%] left-0 right-[37.5%] h-[9px] bg-[#000] z-10" />
            <div className="absolute top-[50%] left-0 right-0 h-[9px] bg-[#000] z-10" />
            <div className="absolute top-[75%] left-[62.5%] right-0 h-[9px] bg-[#000] z-10" />
            <div className="absolute top-[87.5%] left-[62.5%] right-0 h-[13px] bg-[#000] z-10" />

            {/* Color blocks */}
            {/* Block 1 - About */}
            <div className="absolute top-0 left-0 w-[62.5%] h-[25%] bg-[#004592]">
              <div className="w-full h-full p-2">
                <About />
              </div>
            </div>

            {/* Block 2 - Skills */}
            <div className="absolute top-0 left-[calc(62.5%+9px)] right-0 h-[50%] bg-[#F0F1EC]">
              <div className="w-full h-full p-2">
                <Skills />
              </div>
            </div>

            {/* Block 3 - MyName */}
            <div className="absolute top-[calc(25%+9px)] left-0 w-[62.5%] h-[calc(25%-9px)] bg-[#F0F1EC]">
              <div className="w-full h-full p-2">
                <MyName />
              </div>
            </div>

            {/* Block 4 - Projects (now as one continuous block) */}
            <div className="absolute top-[calc(50%+9px)] left-0 w-[62.5%] bottom-0 bg-[#E72F24]">
              <div className="w-full h-full p-2">
                <Projects />
              </div>
            </div>

            {/* Block 5 - Experience */}
            <div className="absolute top-[calc(50%+9px)] left-[calc(62.5%+9px)] right-0 h-[calc(25%-9px)] bg-[#F0F1EC]">
              <div className="w-full h-full p-2">
                <Experience />
              </div>
            </div>

            {/* Block 6 - Resume */}
            <div className="absolute top-[calc(75%+9px)] left-[calc(62.5%+9px)] right-0 h-[calc(12.5%-9px)] bg-[#F9D01E]">
              <div className="w-full h-full p-2">
                <Resume />
              </div>
            </div>

            {/* Block 7 - Fake */}
            <div className="absolute top-[calc(87.5%+10px)] left-[calc(62.5%+9px)] right-0 h-[calc(12.5%-10px)] bg-[#232629]">
              <div className="w-full h-full p-2">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}