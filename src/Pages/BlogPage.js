import React from "react";
import Blog from "../components/Blog";

const BlogPage = (props) => {
  return (
    <>
      <Blog card={props.card} />
    </>
  );
};

export default BlogPage;
