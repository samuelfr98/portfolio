import { useState, useEffect } from "react";
import NavLoader from "./NavLoader";
import BlogCard from "./BlogPost";

import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";
import { DataStore } from "@aws-amplify/datastore";
import { BlogPost } from "../models";
import { LoadingManager } from "three";
import NewBlogPost from "./NewBlogPost";

const Blog = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([
    {
      title: "My First Post",
      date: "April 27th, 2022",
      body: ["I decided to develop this website as a learning experience. Why not make something worthwhile while learning some new stuff? I was first exposed to React in undergrad, and I made a few introductory apps in school. Today, I most frequently use SQL in my day to day work, and I have missed the freedom that comes with a blank, white digital canvas. I also realized I could benefit from some practice with CSS and web development in general, plus I was also conveniently lacking a personal portfolio.",<br/>,<br/>,<br/>,
      "This site’s frontend was created with React and CSS, and I used a graphql backend through AWS Amplify. The site is also hosted through AWS Amplify, and I learned a tremendous amount about AWS through this experience. I recently earned a AWS Certified Cloud Practitioner certification, and this was great for actualizing the concepts I had been studying.",<br/>,<br/>,<br/>,
      "I initially took inspiration from the archaic MS Paint layout for the site, but the final product looked too retro. I was proud of my CSS, but I wanted a more modern site. What I considered “old school cool” admittedly appeared pretty outdated, so I drew up some sketches for the site you’re currently navigating. If you want, you can check out the retro section of the site for a splash of nostalgia."]
    },
    {
      title: "My Second Post",
      date: "April 28th, 2022",
      body: ["I decided to develop this website as a learning experience. Why not make something worthwhile while learning some new stuff? I was first exposed to React in undergrad, and I made a few introductory apps in school. Today, I most frequently use SQL in my day to day work, and I have missed the freedom that comes with a blank, white digital canvas. I also realized I could benefit from some practice with CSS and web development in general, plus I was also conveniently lacking a personal portfolio.",<br/>,<br/>,<br/>,
      "This site’s frontend was created with React and CSS, and I used a graphql backend through AWS Amplify. The site is also hosted through AWS Amplify, and I learned a tremendous amount about AWS through this experience. I recently earned a AWS Certified Cloud Practitioner certification, and this was great for actualizing the concepts I had been studying.",<br/>,<br/>,<br/>,
      "I initially took inspiration from the archaic MS Paint layout for the site, but the final product looked too retro. I was proud of my CSS, but I wanted a more modern site. What I considered “old school cool” admittedly appeared pretty outdated, so I drew up some sketches for the site you’re currently navigating. If you want, you can check out the retro section of the site for a splash of nostalgia."]
    },
    {
      title: "My Third Post",
      date: "April 29th, 2022",
      body: ["I decided to develop this website as a learning experience. Why not make something worthwhile while learning some new stuff? I was first exposed to React in undergrad, and I made a few introductory apps in school. Today, I most frequently use SQL in my day to day work, and I have missed the freedom that comes with a blank, white digital canvas. I also realized I could benefit from some practice with CSS and web development in general, plus I was also conveniently lacking a personal portfolio.",<br/>,<br/>,<br/>,
      "This site’s frontend was created with React and CSS, and I used a graphql backend through AWS Amplify. The site is also hosted through AWS Amplify, and I learned a tremendous amount about AWS through this experience. I recently earned a AWS Certified Cloud Practitioner certification, and this was great for actualizing the concepts I had been studying.",<br/>,<br/>,<br/>,
      "I initially took inspiration from the archaic MS Paint layout for the site, but the final product looked too retro. I was proud of my CSS, but I wanted a more modern site. What I considered “old school cool” admittedly appeared pretty outdated, so I drew up some sketches for the site you’re currently navigating. If you want, you can check out the retro section of the site for a splash of nostalgia."]
    },
    {
      title: "My Fourth Post",
      date: "April 30th, 2022",
      body: ["I decided to develop this website as a learning experience. Why not make something worthwhile while learning some new stuff? I was first exposed to React in undergrad, and I made a few introductory apps in school. Today, I most frequently use SQL in my day to day work, and I have missed the freedom that comes with a blank, white digital canvas. I also realized I could benefit from some practice with CSS and web development in general, plus I was also conveniently lacking a personal portfolio.",<br/>,<br/>,<br/>,
      "This site’s frontend was created with React and CSS, and I used a graphql backend through AWS Amplify. The site is also hosted through AWS Amplify, and I learned a tremendous amount about AWS through this experience. I recently earned a AWS Certified Cloud Practitioner certification, and this was great for actualizing the concepts I had been studying.",<br/>,<br/>,<br/>,
      "I initially took inspiration from the archaic MS Paint layout for the site, but the final product looked too retro. I was proud of my CSS, but I wanted a more modern site. What I considered “old school cool” admittedly appeared pretty outdated, so I drew up some sketches for the site you’re currently navigating. If you want, you can check out the retro section of the site for a splash of nostalgia."]
    },
  ]);

  const [postForm, setPostForm] = useState(false);

  useEffect(async () => {
    // readBlogs();
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  }, []);

  // // Simple Query
  // const readBlogs = async () => {
  //   await DataStore.query(BlogPost).then((res) => setPosts(res));

  //   console.log(posts);
  // };

  // // Simple Delete Mutation
  // const deleteBlog = async () => {
  //   const modelToDelete = await DataStore.query(
  //     BlogPost,
  //     posts[posts.length - 1]["id"]
  //   );
  //   DataStore.delete(modelToDelete);
  //   readBlogs();
  // };

  // Render blogs
  const renderBlogs = (p) => {
    return p
      ? p.map((p) => (
          <div className="blog" key={p["id"]}>
            <BlogCard title={p["title"]} date={p["date"]} body={p["body"]} />
          </div>
        ))
      : "";
  };

  //   // Simple Create Mutation
  //   const createBlog = async () => {
  //     await DataStore.save(
  //       new BlogPost({
  //         title: "Title of the post",
  //         author: "01/01/2000",
  //         body: "Body of the post",
  //       })
  //     );
  //     readBlogs();
  //   };

  return (
    <div className="blogsContainer">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="blogHeader">blog entries</div>
      {renderBlogs(posts)}
    </div>
  );
};

export default Blog;
