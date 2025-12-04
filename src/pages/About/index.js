import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";
import boyVR from "../../assets/boy-with-vr.png";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h3 className="text-neutral text-center">Something About Myself</h3>
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src={boyVR}
              alt="Imran Olubodun"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Imran Olubodun"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center sm:text-3xl sm:mb-2 md:text-left">
              Imran Olubodun
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Software Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center sm:mb-2 md:text-left">
              I’m a software developer with a strong focus on building
              efficient, reliable, and scalable digital solutions. I work across
              the full stack using technologies like React, Node.js, Express,
              and PostgreSQL, creating systems that balance performance,
              usability, and clean architecture. My experience spans frontend
              engineering, backend API development, automation with Python, and
              the foundations of cross-platform development using Flutter. I
              enjoy solving complex problems, designing maintainable systems,
              and building software that is simple, fast, and intuitive for
              users.
            </p>
            <br />
            <p className="text-neutral font-medium text-center sm:mb-2 md:text-left">
              I’m constantly improving my skills, exploring new tools, and
              expanding my capabilities as a developer—whether it’s designing
              smarter interfaces, optimizing system performance, or developing
              end-to-end production-ready applications.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center sm:mb-2 md:text-left">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Imran Olubodun
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+234 816 121
                9508
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                olubodunalade@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span> Lagos,
                Nigeria
              </h2>
              <a
                href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
                target="blank"
              >
                <div className="flex justify-center md:justify-start">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
