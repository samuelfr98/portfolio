import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";

const Blog = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  });

  // Simple Query
  const readBlogs = async () => {
    try {
      const todos = await API.graphql(
        graphqlOperation({ query: queries.listPosts })
      );
      console.log(todos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="blog">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div onClick={() => readBlogs()}>Blog</div>
    </div>
  );
};

export default Blog;
