import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "Developement based on client's requirement.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "Design",
    content: "Develope simple & user-friendly design.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Advertising",
    content: "Ditect bugs and fixes the technical error.",
    icon: "icon-directions",
  },
  {
    id: 4,
    name: "SEO",
    content: "Develope 100% SEO friendly web.",
    icon: "icon-rocket",
  },
  {
    id: 5,
    name: "Maintenance",
    content: "We offer continuous maintenance to our cliients.",
    icon: "icon-settings",
  },
  {
    id: 6,
    name: "Analysis",
    content: "Conduct extensive field studies to understand how your users thinks.",
    icon: "icon-magnifier",
  },
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
