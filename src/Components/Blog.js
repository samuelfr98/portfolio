import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";

const Blog = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  });

  return (
    <div className="blog">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div>Blog</div>
    </div>
  );
};

export default Blog;
