import React from "react";

function SectionHeading({ title, className }) {
  return (
    <>
      <h3 className={`section-title ${className ? `${className} default-theme-text-color-1` : ""}`}>{title}</h3>
      <div className="spacer" data-height="80"></div>
    </>
  );
}

export default SectionHeading;
