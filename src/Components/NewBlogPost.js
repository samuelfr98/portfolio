// import { DataStore } from "@aws-amplify/datastore";
// // import { BlogPost } from "../models";
// import React, { useState, useEffect, useRef } from "react";
// import "../ModernApp.css";

// const NewBlogPost = (props) => {
//   const [x, setX] = useState(0);
//   const [y, setY] = useState(0);
//   // Is front side showing? T/F
//   const [side, setSide] = useState(true);
//   const [post, setPost] = useState({ title: null, author: null, body: null });

//   const ref = useRef();

//   useEffect(() => {
//     // save ref before cleanup resets to null
//     const instance = ref.current;

//     const update = (e) => {
//       const right = instance.getBoundingClientRect().right;
//       const top = instance.getBoundingClientRect().top;

//       setX(e.x - right + instance.offsetWidth / 2);
//       setY(-1 * (e.y - top - instance.offsetHeight / 2));
//     };

//     instance.addEventListener("mousemove", update);
//     instance.addEventListener("touchmove", update);

//     return () => {
//       instance.removeEventListener("mousemove", update);
//       instance.removeEventListener("touchmove", update);
//     };
//   }, [setX, setY]);

//   const onLogo = () => {
//     const xDegrees = (x / 120).toFixed(0);
//     const yDegrees = (y / 70).toFixed(0);
//     ref.current.style.transform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
//     ref.current.style.webkitTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
//     ref.current.style.mozTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
//     ref.current.style.msTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
//     ref.current.style.oTransform = `rotateX(${yDegrees}deg) rotateY(${xDegrees}deg)`;
//   };

//   const backside = () => {
//     return <div>Backside</div>;
//   };

//   const frontside = () => {
//     return (
//       <div className="newBlogPost">
//         <form className="contactForm" action="" method="" encType="">
//           Title:
//           <br />
//           <input type="text" />
//           <br />
//           Author:
//           <br />
//           <input type="text" />
//           <br />
//           Body: <br />
//           <textarea rows="6" cols="20"></textarea>
//           <br />
//           <input
//             type="button"
//             onClick={
//               side
//                 ? () => {
//                     ref.current.style.transform = `rotateY(${180}deg)`;
//                     setSide(false);
//                   }
//                 : () => {
//                     ref.current.style.transform = `rotateY(${0}deg)`;
//                     setTimeout(() => setSide(true), 750);
//                   }
//             }
//             value={"submit"}
//           />
//         </form>
//       </div>
//     );
//   };

//   // Simple Create Mutation
//   const createBlog = async () => {
//     await DataStore.save(
//       new BlogPost({
//         title: "Title of the post",
//         author: "Sam Friedman",
//         body: "Body of the post",
//       })
//     );
//   };

//   return (
//     <div className="blogCardContainerAbout">
//       <div
//         className="blogCard"
//         ref={ref}
//         onMouseMove={
//           side
//             ? async () => onLogo()
//             : () => {
//                 return;
//               }
//         }
//         onMouseLeave={
//           side
//             ? () => {
//                 ref.current.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
//               }
//             : () => {
//                 return;
//               }
//         }
//       >
//         {frontside()}
//         <div className="blogBack">{backside()}</div>
//       </div>
//     </div>
//   );
// };

// export default NewBlogPost;
