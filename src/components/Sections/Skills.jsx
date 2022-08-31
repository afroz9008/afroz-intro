import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I am Afroz sorathiya, Front-end developer from Gujarat, India. I have rich experience in web site design and building and customization, also I am good at React Native.",
  progressData: [
    {
      id: 1,
      name: "React",
      percentage: 95,
    },
    {
      id: 2,
      name: "React Native",
      percentage: 86,
    },
    {
      id: 3,
      name: "Gatsby.js",
      percentage: 46,
    },
    {
      id: 4,
      name: "Next.js",
      percentage: 45,
    },
    {
      id: 5,
      name: "Node js",
      percentage: 35,
    },
    {
      id: 6,
      name: "HTML & CSS",
      percentage: 90,
    },
    {
      id: 7,
      name: "jQuery",
      percentage: 60,
    },
    {
      id: 8,
      name: "Javascript/ES-6",
      percentage: 92,
    },
    {
      id: 9,
      name: "Material-UI",
      percentage: 100,
    },
    {
      id: 10,
      name: "Contentful",
      percentage: 30,
    },
    {
      id: 11,
      name: "Python",
      percentage: 65,
    },
    {
      id: 12,
      name: "Django Framwork",
      percentage: 55,
    },
  ],
};

function Skills() {
  return (
    <div>
      <p className="mb-0 default-theme-text-color-1">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.sort((a, b) => b.percentage - a.percentage).map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
