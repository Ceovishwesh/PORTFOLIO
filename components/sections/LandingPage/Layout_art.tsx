"use client";

import { motion } from "framer-motion";
import About from './about';
import Skills from './skills';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import Fake from './fake';
import MyName from './my-name';
import Resume from './resume';


export default function LayoutArt() {
  return (
    <div 
      className="w-full min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundColor: 'var(--background)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%23e3d8b7' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
      }}
    >
      <motion.div 
  className="p-4 md:p-8 rounded-lg w-full max-w-7xl"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.5,
    type: "spring",
    stiffness: 100,
    damping: 20
  }}
>
  <div className="w-full aspect-[500/520] max-w-[500px] mx-auto">
    <div className="relative w-full h-full bg-[#fff] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]">
            {/* Vertical lines */}
            <motion.div 
              className="absolute left-[62.5%] top-0 bottom-0 w-[1.8%] min-w-[4px] bg-[#000] z-10"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            {/* Horizontal lines */}
            <motion.div 
              className="absolute top-[25%] left-0 right-[37.5%] h-[1.8%] min-h-[4px] bg-[#000] z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.div 
              className="absolute top-[50%] left-0 right-0 h-[1.8%] min-h-[4px] bg-[#000] z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.div 
              className="absolute top-[75%] left-[62.5%] right-0 h-[1.8%] min-h-[4px] bg-[#000] z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
            <motion.div 
              className="absolute top-[87.5%] left-[62.5%] right-0 h-[2.5%] min-h-[4px] bg-[#000] z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />

            {/* Block 1 - About */}
            <motion.div 
              className="absolute top-0 left-0 w-[62.5%] h-[25%] bg-[#004592]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <About />
              </div>
            </motion.div>

            {/* Block 2 - Skills */}
            <motion.div 
              className="absolute top-0 left-[calc(62.5%+1.8%)] right-0 h-[50%] bg-[#F0F1EC]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <Skills />
              </div>
            </motion.div>

            {/* Block 3 - MyName */}
            <motion.div 
              className="absolute top-[calc(25%+1.8%)] left-0 w-[62.5%] h-[calc(25%-1.8%)] bg-[#F0F1EC]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <MyName />
              </div>
            </motion.div>

            {/* Block 4 - Projects */}
            <motion.div 
              className="absolute top-[calc(50%+1.8%)] left-0 w-[62.5%] bottom-0 bg-[#E72F24]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <Projects />
              </div>
            </motion.div>

            {/* Block 5 - Experience */}
            <motion.div 
              className="absolute top-[calc(50%+1.8%)] left-[calc(62.5%+1.8%)] right-0 h-[calc(25%-1.8%)] bg-[#F0F1EC]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <Experience />
              </div>
            </motion.div>

            {/* Block 6 - Resume */}
            <motion.div 
              className="absolute top-[calc(75%+1.8%)] left-[calc(62.5%+1.8%)] right-0 h-[calc(12.5%-1.8%)] bg-[#F9D01E]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <Resume />
              </div>
            </motion.div>

            {/* Block 7 - Contact */}
            <motion.div 
              className="absolute top-[calc(87.5%+1.8%)] left-[calc(62.5%+1.8%)] right-0 h-[calc(12.5%-1.8%)] bg-[#232629]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px #000, 0 8px 10px -6px rgb(0 0 0 / 0.1)",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <div className="w-full h-full p-2 md:p-3 overflow-auto">
                <Contact />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}