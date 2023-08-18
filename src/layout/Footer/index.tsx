import React from "react";
import { DiJsBadge, DiHeroku, DiCss3, DiNodejs, DiReact } from "react-icons/di";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-banner-cont">
      <div className="banner">
        <h3>
          <strong>KORKIE</strong>
        </h3>
        <div className="bannerone-content">
          <div className="banner-info">
            <p>justinjkorkie@gmail.com</p>
            <p>(072) 178 8599</p>
          </div>
          <div className="banner-stack">
            {/* add links */}
            <DiReact className="banner-icons" />
            <DiNodejs className="banner-icons" />
            <DiJsBadge className="banner-icons" />
            <DiCss3 className="banner-icons" />
            <DiHeroku className="banner-icons" />
          </div>
        </div>
      </div>

      <div className="bannertwo">
        <p>
          ©2021 This progressive website was proudly created by Justin Korkie
        </p>
      </div>
    </div>
  );
};

export default Footer;
