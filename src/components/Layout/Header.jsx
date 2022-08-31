import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useRouteMatch } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

const headerData = {
  name: "Afroz Sorathiya",
  designation: "Front-End Developer",
  imageThumb: "/images/favicon.jpg",
  social: {
    facebook:
      "https://www.facebook.com/people/Sorathiya-Afroz/100014619039836/",
    instagram: "https://www.instagram.com/sorathiya_afroz/",
    youtue: "https://www.youtube.com/channel/UC_8BLELEEDJXVWsZ6f-dEfw/featured",
    dribbble: "https://dribbble.com/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  const [currentPath, setCurrentPath] = useState("");
  const match = useRouteMatch();

  useEffect(() => {
    setCurrentPath(match.path);
  }, [match]);

  return (
    <>
      <div
        style={{ position: "sticky", top: 0, zIndex: 1 }}
        className={"mobile-header py-2 px-3 mt-4"}
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link
          to="/"
          className="logo"
          style={{
            height: 40,
            width: 40,
            borderRadius: 25,
            overflow: "hidden",
          }}
        >
          <img
            src={headerData.imageThumb}
            alt={headerData.name}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
        </Link>
        <Link to="/" className="site-title dot ml-2 default-theme-text-color-1">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
        style={{ zIndex: 2 }}
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link
            to="/"
            className="logo"
            style={{
              height: 40,
              width: 40,
              borderRadius: 25,
              overflow: "hidden",
            }}
          >
            <img
              src={headerData.imageThumb}
              alt={headerData.name}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            />
          </Link>
          <Link
            to="/"
            className="site-title dot mt-3 default-theme-text-color-1"
          >
            {headerData.name}
          </Link>

          <span className="site-slogan default-theme-text-color-1">
            {headerData.designation}
          </span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-home"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <i className="icon-home"></i>Home
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-home"></i>Home
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-about"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-60}
                    duration={500}
                  >
                    <i className="icon-user"></i>About
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-user"></i>About
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-skills"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-60}
                    duration={500}
                  >
                    <i className="icon-support"></i>Skills
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-support"></i>Skills
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-funfacts"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Works
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-grid"></i>Works
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-services"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-60}
                    duration={500}
                  >
                    <i className="icon-bulb"></i>Services
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-bulb"></i>Services
                  </Link>
                )}
              </li>
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-experiences"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-55}
                    duration={500}
                  >
                    <i className="icon-graduation"></i>Resume
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-graduation"></i>Resume
                  </Link>
                )}
              </li>
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                  onClick={toggleHandler}
                    activeClass="active"
                    to="section-portfolios"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <i className="icon-grid"></i>Works
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-grid"></i>Works
                  </Link>
                )}
              </li> */}
              {/* <li>
                {currentPath === "/" ? (
                  <ScrollLink
                  onClick={toggleHandler}
                    activeClass="active"
                    to="section-blogs"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-20}
                    duration={500}
                  >
                    <i className="icon-pencil"></i>Blog
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-pencil"></i>Blog
                  </Link>
                )}
              </li> */}
              <li>
                {currentPath === "/" ? (
                  <ScrollLink
                    onClick={toggleHandler}
                    activeClass="active"
                    to="section-contact"
                    spy={true}
                    className="default-theme-text-color-1"
                    smooth={true}
                    offset={-255}
                    duration={500}
                  >
                    <i className="icon-phone"></i>Contact
                  </ScrollLink>
                ) : (
                  <Link to="/" className="default-theme-text-color-1">
                    <i className="icon-phone"></i>Contact
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.facebook}>
                    <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.twitter ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.twitter}>
                    <FaTwitter />
                  </a>
                </li>
              )}
              {!headerData.social.instagram ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
              )}
              {!headerData.social.youtue ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.youtue}>
                    <FaYoutube />
                  </a>
                </li>
              )}
              {!headerData.social.dribbble ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.dribbble}>
                    <FaDribbble />
                  </a>
                </li>
              )}
            </ul>

            <span className="copyright">
              &copy; {new Date().getFullYear()} Afroz Sorathiya
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
