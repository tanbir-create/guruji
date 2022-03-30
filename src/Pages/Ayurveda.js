import React from "react";
import "./Ayurveda.css";

const Ayurveda = () => {
  return (
    <>
      <div className="ayurveda-container">
        <div className="search-filter-container">ki</div>
        <div className="doc-profile-container">
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="" alt="image" />
                </div>
                <div className="rating">4.5</div>
              </div>
              <div className="right">
                <h3>Name</h3>
                <div className="skills">
                  <div>Skills</div>
                  <div>Skills</div>
                  <div>Skills</div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
