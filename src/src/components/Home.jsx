import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import profilePic from "../assets/suit-profile-cropped.png";

//TODO make the buttons the width of 1/2 the container

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex md:hidden">
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className="flex  justify-center mb-4">
          <img src={profilePic} className=" h-52 rounded-md"></img>
        </div>
        <p className="flex justify-center text-pink-600">Hi, my name is</p>
        <h1 className="flex justify-center text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Alec Moore
        </h1>
        <h2 className="flex justify-center text-center text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="flex justify-center text-center text-[#8892b0] py-4 ">
          I want to be the very best that no one ever was. To catch them is my
          real test. To train them is my cause. I will travel across the land.
          Searching far and wide. This pokemon to understand, the power that's
          inside
        </p>

        {/* Social icons */}
        <div className="flex flex-row max-w-[1000px] ">
          <ul className="flex flex-row justify-center w-full flex-wrap gap-2 ">
            <li
              className="w-[160px] h-[60px] flex justify-between items-center 
              bg-blue-600 "
            >
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/alecdmoore/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#333333] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/alecdmoore"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center   bg-[#5d978a] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:alecdmoore@gmail.com"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#565f69] ">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="../assets/AlecMooreResume.docx"
                download
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
