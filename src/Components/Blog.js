import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";
import BlogCard from "./BlogCard";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import { BlogPost } from "../models";
import { LoadingManager } from "three";
import NewBlogPost from "./NewBlogPost";

const Blog = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(DataStore.query(BlogPost));
  const [posts, setPosts] = useState(null);

  const [postForm, setPostForm] = useState(false);

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

  // Simple Delete Mutation
  const deleteBlog = async () => {
    const modelToDelete = await DataStore.query(
      BlogPost,
      posts[posts.length - 1]["id"]
    );
    DataStore.delete(modelToDelete);
    readBlogs();
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

    // Simple Create Mutation
    const createBlog = async () => {
      await DataStore.save(
        new BlogPost({
          title: "Title of the post",
          author: "Sam Friedman",
          body: "Body of the post",
        })
      );
      readBlogs();
    };

  return (
    <div className="blogsContainer">
      {isLoading ? <NavLoader page="about" /> : ""}
      {!postForm ? (
        <div onClick={() => setPostForm(true)}>Show new blog post form</div>
      ) : (
        <>
          <div className="blog">
            <NewBlogPost />
          </div>

          <div className="cancel" onClick={() => setPostForm(false)}>Cancel</div>
        </>
      )}
      {!postForm ? (
        <>
          <div onClick={() => createBlog()}>Create blog</div>
          <div onClick={() => readBlogs()}>Refresh</div>
          <div onClick={() => deleteBlog()}>Delete blog</div>
        </>
      ) : (
        ""
      )}
      {!postForm ? renderBlogs(posts) : ""}
    </div>
  );
};

export default Blog;
