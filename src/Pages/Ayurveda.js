import React from "react";
import "./Ayurveda.css";

const Ayurveda = () => {
  return (
    <>
      <div className="ayurveda-container">
        <div className="search-filter-container">
          <div className="sort-container">
            <select className="sorting">
              <option>Sort By :</option>
              <option>Popularity</option>
              <option>Experience : High to Low</option>
              <option>Experience : Low to High</option>
              <option>Total orders : High to Low</option>
              <option>Total orders : Low to High</option>
              <option>Price : High to Low</option>
              <option>Price : Low to High</option>
              <option>Rating : High to Low</option>
            </select>
          </div>
          <div>ki</div>
          <div>jj</div>
        </div>
        s
        <div className="doc-profile-container">
          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
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
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
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
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
          {/* card */}
          <div className="card">
            <div className="top">
              <div className="left">
                <div className="img-cont">
                  <img src="./images/expert.png" alt="image" />
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
                <h4>English</h4>
              </div>
            </div>
            <div className="bottom">
              <div className="exp">Exp: 20 Yrs.</div>
              <button className="call-btn">Call</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayurveda;
