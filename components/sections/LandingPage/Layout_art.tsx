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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='126' height='84' viewBox='0 0 126 84'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e3d8b7' fill-opacity='0.5'%3E%3Cpath d='M126 83v1H0v-2h40V42H0v-2h40V0h2v40h40V0h2v40h40V0h2v83zm-2-1V42H84v40h40zM82 42H42v40h40V42zm-50-6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm96 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-42 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm30-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM20 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM8 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM50 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm54-12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm12 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 54a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM92 78a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24-42a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                zIndex: 20,
                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
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