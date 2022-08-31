import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id:1,
    year:"2022 - Present",
    degree:"Alchemy Technology LTD",
    content:"Working on Front-End Developer in React technology"
  },
  {
    id:2,
    year:"2020 - 2022",
    degree:"Appsile",
    content:"Working as Front-End Developer in React technology"
  },
  {
    id:2,
    year:"2019 - 2021",
    degree:"Bechlor's Degree",
    content:"Study in Bechlor of Computer Application - BCA"
  },
  // {
  //   id: 1,
  //   year: "2019 - Present",
  //   degree: "Academic Degree",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  // },
  // {
  //   id: 2,
  //   year: "2018 - 2015",
  //   degree: "Bachelor’s Degree",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  // },
  // {
  //   id: 3,
  //   year: "2015 - 2012",
  //   degree: "Honours Degree",
  //   content:
  //     "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget dolor aenean massa.",
  // },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
