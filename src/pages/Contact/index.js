import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = async (e) => {
    e.preventDefault();

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      subject: form.current.subject.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Message delivered 🚀",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops 😕",
          text: "Failed to send message",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="parent py-24 mt-4">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In{" "}
          <span className="text-4xl font-semibold text-center bg-gradient-to-r from-purple-500 via-purple-600-to-purple-800 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium mb-6">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-3">
                <input
                  className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className="px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition w-full"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              value="Send Message"
              className="primary-button mt-4"
            >
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <p className="text-2xl hover:text-primary cursor-pointer duration-300"></p>
            <h3 className="font-medium text-primary">🧑🏿 Imran Olubodun</h3>
          </div>
          <div className="flex items-center my-6">
            <p className="text-2xl hover:text-primary cursor-pointer duration-300"></p>
            <h3 className="font-medium text-primary">📞 +234 816 121 9508</h3>
          </div>
          <div className="flex items-center my-6">
            <p className="text-3xl hover:text-primary cursor-pointer duration-300"></p>
            <h3 className="font-medium text-primary">
              📦 olubodunalade@gmail.com
            </h3>
          </div>
          <div className="flex items-center my-6">
            <p className="text-2xl hover:text-primary cursor-pointer duration-300"></p>
            <h3 className="font-medium text-primary">🌎 Lagos, Nigeria</h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://www.linkedin.com/in/bolaji-imran-olubodun-562aa934a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
            <a
              href="https://github.com/justimran1"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithub></FaGithub>
            </a>
            <a
              href="https://x.com/pellingham_?s=11&t=bhMaRk9awznvD-Lo9XfLMg"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href="https://www.instagram.com/justimran____?igsh=aHF3YmxzdnVlZTZv&utm_source=qr"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
