import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "black" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://x.com/pellingham_?s=11&t=bhMaRk9awznvD-Lo9XfLMg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/bolaji-imran-olubodun-562aa934a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/justimran1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-blue" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.instagram.com/justimran____?igsh=aHF3YmxzdnVlZTZv&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl inline-bloc mx-6 text-neutral"
            href="https://drive.google.com/file/d/14CcomENGEh8AEXvAqqGNOij3dEyr0-c4/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://x.com/pellingham_?s=11&t=bhMaRk9awznvD-Lo9XfLMg"
              className="text-primary hover:underline"
              target="blank"
            >
              Olubodun Imran
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
