// // src/components/ParticlesBackground.js
// import React from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";

// const ParticlesBackground = () => {
//   const particlesInit = async (engine) => {
//     await loadSlim(engine); // This works with the slim package (fewer features but less error-prone)
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: true, zIndex: -1 },
//         background: { color: "#0f172a" },
//         particles: {
//           number: { value: 80 },
//           color: { value: "#61dafb" },
//           shape: { type: "circle" },
//           opacity: { value: 0.5 },
//           size: { value: { min: 1, max: 3 } },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             outModes: "bounce",
//           },
//           links: {
//             enable: true,
//             distance: 150,
//             color: "#61dafb",
//             opacity: 0.3,
//             width: 1,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "trail" },
//             resize: true,
//           },
//           modes: {
//             trail: {
//               delay: 0.005,
//               quantity: 4,
//               particles: {
//                 color: { value: "#ffffff" },
//                 opacity: 0.3,
//                 size: 2,
//                 move: { speed: 1 },
//               },
//             },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default ParticlesBackground;
