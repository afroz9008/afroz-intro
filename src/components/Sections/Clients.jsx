import React from "react";
import Slider from "react-slick";

const clientsData = [
  {
    id: 1,
    icon: "icon-social-tumblr",
    color: "#001833",
    background: 'white'
  },
  {
    id: 2,
    icon: "icon-social-twitter",
    color: "#1DA1F2",
    background: 'white'
  },
  {
    id: 3,
    icon: "icon-social-facebook",
    color: "#4867AA",
    background: 'white'
  },
  {
    id: 4,
    icon: "icon-social-instagram",
    color: "#C4389D",
    background: 'white'
  },
  {
    id: 5,
    icon: "icon-social-linkedin",
    color: "#0077B5",
    background: 'white'
  },
  {
    id: 6,
    icon: "icon-social-pinterest",
    color: "#B7081B",
    background: 'white'
  },
  {
    id: 7,
    icon: "icon-social-github",
    color: "#1B1F23",
    background: 'white'
  },
  {
    id: 8,
    icon: "icon-social-google",
    color: "#34A853",
    background: 'white'
  },
  {
    id: 9,
    icon: "icon-social-reddit",
    color: "#FF3C00",
    background: 'white'
  },
  {
    id: 10,
    icon: "icon-social-skype",
    color: "#028BCC",
    background: 'white'
  },
  {
    id: 11,
    icon: "icon-social-dribbble",
    color: "#E54786",
    background: 'white'
  },
  {
    id: 12,
    icon: "icon-social-behance",
    color: "#000000",
    background: 'white'
  },
  {
    id: 13,
    icon: "icon-social-foursqare",
    color: "#F14573",
    background: 'white'
  },
  {
    id: 14,
    icon: "icon-social-soundcloud",
    color: "#FF6816",
    background: 'white'
  },
  {
    id: 15,
    icon: "icon-social-spotify",
    color: "#3DDB73",
    background: 'white'
  },
  {
    id: 16,
    icon: "icon-social-stumbleupon",
    color: "#EB4823",
    background: 'white'
  },
  {
    id: 17,
    icon: "icon-social-youtube",
    color: "#FE0000",
    background: 'white'
  },
  {
    id: 18,
    icon: "icon-social-dropbox",
    color: "#0062FF",
    background: 'white'
  },
];

function Clients() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className="shadow-dark background-blue color-white padding-50">
      <h2 className="d-none">Clients</h2>

      <div className="clients-wrapper">
        <Slider {...settings} className="padding-slider">
          {clientsData.map((client) => (
            <div className="client-item" key={client.id}>
              <div className="inner">
                <i style={{ borderRadius: 10, fontSize: 30, background: client.background || "white", color: client.color || "red", padding: 6 }} className={client.icon} />
                {/* <img src={client.image} alt="client-name" /> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Clients;
