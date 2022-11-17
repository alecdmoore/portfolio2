import React from "react";
import { data } from "../data/data.js";
import Project from "./Project.jsx";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <Project
              image={item.image}
              key={index}
              name={item.name}
              urlDemo={item.live}
              urlCode={item.github}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
