import React from "react";
import { FaGithub, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-scroll";
const Project = (props) => {
  console.log(props.image[0].image);
  return (
    <div className="shadow-lg shadow-[#040c16] group container text-center items-center mx-auto ">
      <img src={props.image} />
      <div>
        <h5 className="font-bold text-xl">{props.name}</h5>
        <p>{props.description}</p>
        <div className="flex justify-evenly py-2">
          <ul className="flex flex-row  justify-center w-full flex-wrap ">
            <li className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5d978a] hover:border-[#5d978a]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={props.urlDemo}
              >
                <pre>Demo </pre> <FaGlobeAmericas size={20} />
              </a>
            </li>
            <li className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href={props.urlCode}
              >
                <pre>Code </pre> <FaGithub size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
