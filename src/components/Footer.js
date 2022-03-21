import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgb(74, 109, 109)",
          marginTop: "35px",
        }}
      >
        <div className="footer-cont">
          <div className="footer-logo">
            <div className="logo-cont">
              <img src="./images/logo.png" />
            </div>
            <div></div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
