import React from "react";
import "./Topic.css";
import astro from "../components/images/astro.png";
import Cards from "../components/Cards";
import { useParams } from "react-router-dom";
import { referData } from "../data";

const Topic = (props) => {
  const { id } = useParams();
  const getData = referData[id - 1];
  console.log(getData);
  return (
    <>
      <div className="main">
        <div className="popular-topic-cont">
          <h3>Popular topics</h3>
          <div className="pop-card">
            <div className="pop-left">
              <h4>Title:</h4>
              <h5>Date:</h5>
            </div>
            <div className="pop-right">
              <img src={astro} />
            </div>
          </div>
          <div className="pop-card">
            <div className="pop-left">
              <h4>Title:</h4>
              <h5>Date:</h5>
            </div>
            <div className="pop-right">
              <img src={astro} />
            </div>
          </div>
          <div className="pop-card">
            <div className="pop-left">
              <h4>Title:</h4>
              <h5>Date:</h5>
            </div>
            <div className="pop-right">
              <img src={astro} />
            </div>
          </div>
        </div>
        <div className="blog-detail">
          <h1>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam c
          </h1>
          <div className="blog-img">
            <img src={astro} />
          </div>
          <p>{getData.desc}</p>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, Lorem ipsum dolor sit
            amet, consec tetur adipiscing elit. Nam condimentum tempus diam,
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam, Lorem ipsum dolor sit amet, consec tetur
            adipiscing elit. Nam condimentum tempus diam, Lorem ipsum dolor sit
            amet, consec tetur adipiscing elit. Nam condimentum tempus diam,{" "}
          </p>
          <div className="btn">
            <button>Like</button>
            <button>Comment</button>
            <button>Share</button>
          </div>
        </div>
      </div>

      {/* comment section */}
      <div className="comment-container">
        <h3>Comments:</h3>
        <div className="comment">
          <div className="img-cont">
            <div className="img">
              <img src={astro} />
            </div>
          </div>
          <div className="text-cont">
            <h4>Name</h4>
            <h5>2 days ago</h5>
            <p>
              Lorem ipsum dolor sit amet, consec te Lorem ipsum dolor sit amet,
              consec te
            </p>
          </div>
        </div>
        <div className="comment">
          <div className="img-cont">
            <div className="img">
              <img src={astro} />
            </div>
          </div>
          <div className="text-cont">
            <h4>Name</h4>
            <h5>2 days ago</h5>
            <p>
              Lorem ipsum dolor sit amet, consec te Lorem ipsum dolor sit amet,
              consec te
            </p>
          </div>
        </div>
      </div>

      {/* interesting topic section */}
      <div className="interest-cont">
        <h3>Topics might intrust you</h3>
        <Cards card={props.card} data={referData} />
      </div>
    </>
  );
};

export default Topic;
