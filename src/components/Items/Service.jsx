import React from "react";

function Service({ service: { name, content, icon } }) {
  return (
    <div className="service-item text-center" style={{height:"100%"}}>
      <i className={`${icon} icon-simple`}></i>
      <h4 className="my-3 default-theme-text-color-1">{name}</h4>
      <p className="mb-0 default-theme-text-color-1">{content}</p>
    </div>
  );
}

export default Service;
