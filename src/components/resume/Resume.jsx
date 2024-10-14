import React, { useState } from "react";
import { RiLink } from "react-icons/ri";
import { Link } from "react-router-dom";

const Resume = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const internships = [
    {
      title: "Fullstack Developer Intern",
      company: "Mentornix Consultancy Pvt Ltd",
      link: "https://www.mentornix.com/",
      date: "August 2024 - Present",
      description: `In my current internship at Mentornix Consultancy Pvt Ltd, I'm working as a Fullstack Developer focusing on frontend development using React.js, and SCSS to create interactive and user-friendly interfaces. Additionally, I'm working on backend APIs using Node.js, Express.js, MySQL, and AWS to enable data storage and retrieval for the application.`,
    },
    {
      title: "Web Developer Intern",
      company: "CodSoft",
      link: "https://www.codsoft.in/",
      date: "August 2023 - December 2023",
      description: `During my internship at CodSoft, I worked as a Web Developer with a focus on frontend development using React.js, HTML, CSS, and JavaScript. The internship was conducted virtually, and I was assigned tasks that needed to be completed within specified deadlines`,
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
         <b>Here are my experiences and qualifications.</b>
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Internship
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="card-wrapper w-[100%] sm:w-full mt-5 flex flex-col items-center mx-auto">
                <div className="relative w-full flex items-center justify-center overflow-hidden">
                  <div className="carousel-container w-full sm:w-full overflow-hidden">
                    <div
                      className="carousel-inner flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      {internships.map((internship, index) => (
                        <div
                          className="carousel-item w-full flex-shrink-0"
                          key={index}
                        >
                          <div className="flex flex-col gap-1 sm:gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                            <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                              {internship.title}
                            </h1>
                            <Link
                              to={internship.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                                <RiLink /> {internship.company}
                              </span>
                            </Link>
                            <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                              {internship.date}
                            </span>
                            <p className="text-[.9rem] text-justify break-words text-gray-500">
                              {internship.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Dots */}
                <div className="dots mt-4 flex justify-center gap-2">
                  {internships.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`cursor-pointer w-2 h-2 rounded-full ${
                        currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-black">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 hover:border-yellow-400 hover:shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg bg-white">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science 
                </h1>
                <Link to={"https://www.ritroorkee.com"}>
                  <span className=" text-[1rem] font-semibold text-gray-500 sm:text-base flex items-center gap-1">
                    <RiLink /> RIT, Roorkee
                  </span>
                </Link>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2021 - Year 2025
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  As an undergraduate student, I have a good understanding of
                  web development technologies such as HTML, CSS, TailwindCSS,
                  JavaScript, TypeScript, React.js. Additionally,
                  I'm proficient in backend technologies such as Node.js,
                  Express.js, MongoDB and MySQL. I also have skills in C++ and
                  Java for problem-solving using Data structures and Algorithms.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;