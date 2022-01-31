// import "../ModernApp.css";
// import React, { useEffect } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { Physics, usePlane, useBox, useSphere } from "@react-three/cannon";
// import { OrbitControls, Stars } from "@react-three/drei";

// const Box = () => {
//   const [ref, api] = useBox(() => ({ mass: 1, postion: [0, 2, 0] }));

//   return (
//     <mesh
//       onClick={() => {
//         api.velocity.set(0, 20, 0);
//       }}
//       ref={ref}
//       position={[0, 2, 0]}
//     >
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   );
// };

// const Sphere = ({func}) => {
//    const [ref] = useSphere(() => ({ mass: 1, postion: [0, 2, 0] }));
 
//    return (
//      <mesh
//        onClick={() => {
//          setTimeout(() => func('retro'), 2000);
//        }}
//        ref={ref}
//        position={[0, 2, 0]}
//      >
//        <sphereBufferGeometry attach="geometry" />
//        <meshLambertMaterial attach="material" color="hotpink" />
//      </mesh>
//    );
//  };

// const Plane = () => {
//   const [ref] = usePlane(() => ({
//     rotation: [-Math.PI / 2, 0, 0],
//   }));

//   return (
//     <mesh rotation={[-Math.PI / 2, 0, 0]}>
//       <boxBufferGeometry attach="geometry" args={[100, 100, 0]} />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   );
// };

// const FiberScene = ({ downgradeTheme }) => {
//   return (
//     <>
//       <div className="modernContainer">
//         <Canvas>
//           <OrbitControls />
//           <Stars />
//           <ambientLight intensity={0.5} />
//           <spotLight position={[10, 15, 10]} angle={0.3} />
//           <Physics>
//             <Box />
//             <Sphere func={downgradeTheme}/>
//             <Plane />
//           </Physics>
//         </Canvas>
//       </div>
//     </>
//   );
// };

// export default FiberScene;
