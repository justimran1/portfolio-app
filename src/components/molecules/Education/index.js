import React from "react";
import Lottie from "lottie-react";
import readingBook from "../../../assets/reading-book.json";

const Education = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: readingBook,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="pt-24">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-secondary">Qualification</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            animationData={readingBook}
            loop={true}
            style={{ height: 400, width: 400 }}
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-accent shadow-purple-500/40 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-secondary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h4 className="text-2xl font-semibold text-secondary">
                B.Sc in CS
              </h4>
              <p className="text-sm text-neutral font-semibold">2022 - 2026</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              I'm a Final Year Student in Lagos State University. Specialized in
              Software development, computing systems data structures and
              algorithm thinking.
            </p>
          </div>

          {/* React Developer */}
          <div className="my-6 md:my-4 md:ml-[200px] p-6 bg-accent shadow-purple-500/40 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-secondary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h4 className="text-2xl font-semibold text-secondary">
                ALX Africa
              </h4>
              <p className="text-sm text-neutral font-semibold">
                Software Engineering Program
              </p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Foundations in <b>backend engineering,</b> OOP API development and
              problem solving version control best practices and project based
              learning.
            </p>
          </div>

          {/* SSC */}
          <div className="p-6 bg-accent shadow-purple-500/40 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg w-[300px] hover:shadow-secondary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h4 className="text-2xl font-semibold text-secondary">
                Udemy |Full stack development
              </h4>
              <p className="text-sm text-neutral font-semibold">2024-25</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Complete web development bootcamp python 100 days of code complete
              bootcamp
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12 mt-6 ">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center mt-30">
          My <span className="text-secondary">Experience</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="">
          <Lottie
            animationData={readingBook}
            loop={true}
            style={{ height: 400, width: 400 }}
          />
        </div>
        <div className="mx-auto lg:ml-auto">
          {/* Diploma */}
          <div className="p-6 bg-accent shadow-purple-500/40 bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg inline-block w-[300px] hover:shadow-secondary duration-300 cursor-pointer">
            <div className="text-right mb-4">
              <h4 className="text-2xl font-semibold text-secondary">
                Software Intern |HIIT PLC
              </h4>
              <p className="text-sm text-neutral font-semibold">2022 - 2026</p>
            </div>
            <p className="text-sm text-neutral text-justify">
              Practical full stack development with mordern web technologies
              Exposure to real-world software development enviroments and
              deployment pipelines
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
