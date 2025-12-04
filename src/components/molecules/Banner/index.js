import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import coding from "../../../assets/coding.json";
import man from "../../../assets/confused-with-phone-expression-character.png";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-80vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          Hello, I'm
        </h2>
        <h1 className="text-4xl text-fuchsia-500 font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
          Imran Olubodun
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-secondary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "A Mern-stack Developer",
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
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%] pt-4">
          A self-driven, Career-oriented full-stack developer ,Software
          Engineneer, with solid front-end expertise strong interest in backend
          engineering . I build responsive interfaces, secure APIs, and scalable
          server-side applications using modern JavaScript and python
          Technologies and Frameworks and efficients API-driven architectures.
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a
            href="https://drive.google.com/file/d/14CcomENGEh8AEXvAqqGNOij3dEyr0-c4/view?usp=drive_link"
            target="blank"
          >
            <button className="primary-button">
              <span> CV</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>Get In Touch</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={man}
          alt="Imran Olubodun"
          className="p-12 w-70 h-70 transform translate-y-[-12%]"
          title="Imran Olubodun"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
