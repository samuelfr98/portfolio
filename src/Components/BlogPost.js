import "../ModernApp.css";
import React, { useState, useEffect, useRef } from "react";

const BlogPost = (props) => {
  // Is front side showing? T/F
  const [expanded, setExpanded] = useState(false);
  const ref = useRef();

  const preview = () => {
    return (
      <div className="blogPreview">
        <div className="blogTitle">{props.title}</div>
        <div className="blogDate">{props.date}</div>
      </div>
    );
  };

  return (
    <div className="blogCardContainerAbout">
      {!expanded ? (
        <div className="blogCard" ref={ref} onClick={() => setExpanded(true)}>
          {preview()}
        </div>
      ) : (
        <div className="fullPost" onClick={() => setExpanded(false)}>
          <div className="topOfBlogPost">
            <h1>{props.title}</h1>
            <h2 className="postDate">{props.date}</h2>
          </div>
          <p className="post" align="left">
            {props.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
