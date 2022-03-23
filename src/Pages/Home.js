import react from "react";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import Blog from "../components/Blog";
import Choose from "../components/Choose";

const Home = (props) => {
  return (
    <>
      <Banner />
      <Feature />
      <Blog card={props.card} />
      <Choose />
    </>
  );
};

export default Home;
