import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";
import BlogCard from "./BlogCard";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import { BlogPost } from "../models";
import { LoadingManager } from "three";

const Blog = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(DataStore.query(BlogPost));
  const [posts, setPosts] = useState(null);

  useEffect(async () => {
    readBlogs();
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  // Simple Query
  const readBlogs = async () => {
    await DataStore.query(BlogPost).then((res) => setPosts(res));

    console.log(posts);
  };

  // Simple Create Mutation
  const createBlog = async () => {
    await DataStore.save(
      new BlogPost({
        title: "Title of the post",
        author: "Sam Friedman",
        body: "Body of the post",
      })
    );
  };

  // Simple Delete Mutation
  const deleteBlog = async () => {
    const modelToDelete = await DataStore.query(
      BlogPost,
      posts[posts.length - 1]["id"]
    );
    DataStore.delete(modelToDelete);
  };

  // Render blogs
  const renderBlogs = (p) => {
    return p
      ? p.map((p) => (
          <div className="blog" key={p["id"]}>
            <BlogCard
              title={p["title"]}
              author={p["author"]}
              body={p["body"]}
            />
          </div>
        ))
      : "";
  };

  return (
    <div className="blogsContainer">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div onClick={() => createBlog()}>Create blog</div>
      <div onClick={() => readBlogs()}>Read blogs</div>
      <div onClick={() => deleteBlog()}>Delete blog</div>
      <div className="blog">
        <BlogCard title="title" author="author" body="body" />
      </div>
    </div>
  );
};

export default Blog;
