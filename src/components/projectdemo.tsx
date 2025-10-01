// "use client"

// import { motion } from "motion/react"
// import { ShiftCard } from "./projectcode"
// import { TextureButton } from "./texturebutton"
// import { FaGithub } from "react-icons/fa"

// // Data project bisa kamu isi sesuai CV
// const projects = [
//   {
//     title: "Aquadex",
//     image: "/aquadex.png",
//     description:
//       "Platform manajemen air dengan monitoring real-time & analitik untuk efisiensi penggunaan air.",
//     github: "https://github.com/username/aquadex",
//   },
//   {
//     title: "Health Tracker",
//     image: "/healthtracker.png",
//     description:
//       "Aplikasi pelacak kesehatan & fitness dengan analitik kalori, integrasi IoT wearable.",
//     github: "https://github.com/username/healthtracker",
//   },
//   {
//     title: "IoT Dashboard",
//     image: "/iotdashboard.png",
//     description:
//       "Dashboard monitoring IoT dengan update real-time untuk embedded systems.",
//     github: "https://github.com/username/iotdashboard",
//   },
//   {
//     title: "Screen Capture",
//     image: "/screencap.png",
//     description:
//       "Alat untuk menangkap layar dengan integrasi cloud & kolaborasi tim.",
//     github: "https://github.com/username/screencapture",
//   },
// ]

// export default function ShiftCardList() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
//       {projects.map((project, index) => {
//         // Konten atas (judul + logo figma)
//         const topContent = (
//           <div className="bg-accent/90 rounded-md text-primary shadow">
//             <h3 className="text-lg p-4 flex items-center gap-2">
//               {/* Logo Figma */}
//               <svg
//                 width="1em"
//                 height="1em"
//                 viewBox="0 0 54 80"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M13.3333 80C20.6933 80 26.6667 74.027 26.6667 66.667V53.333H13.3333C5.97333 53.333 0 59.307 0 66.667C0 74.027 5.97333 80 13.3333 80Z" fill="#0ACF83"/>
//                 <path d="M0 40C0 32.64 5.97333 26.667 13.3333 26.667H26.6667V53.333H13.3333C5.97333 53.333 0 47.36 0 40Z" fill="#A259FF"/>
//                 <path d="M0 13.333C0 5.973 5.97333 0 13.3333 0H26.6667V26.667H13.3333C5.97333 26.667 0 20.693 0 13.333Z" fill="#F24E1E"/>
//                 <path d="M26.6667 0H40C47.36 0 53.3333 5.973 53.3333 13.333C53.3333 20.693 47.36 26.667 40 26.667H26.6667V0Z" fill="#FF7262"/>
//                 <path d="M53.3333 40C53.3333 47.36 47.36 53.333 40 53.333C32.64 53.333 26.6667 47.36 26.6667 40C26.6667 32.64 32.64 26.667 40 26.667C47.36 26.667 53.3333 32.64 53.3333 40Z" fill="#1ABCFE"/>
//               </svg>
//               {project.title}
//             </h3>
//           </div>
//         )

//         const topAnimateContent = (
//           <motion.img
//             transition={{ duration: 0.3, ease: "circIn" }}
//             src={project.image}
//             layoutId={`img-${index}`}
//             width={78}
//             height={100}
//             alt={project.title}
//             className="rounded-sm absolute top-1.5 right-2 shadow-lg"
//           />
//         )

//         const middleContent = (
//           <motion.img
//             src={project.image}
//             layoutId={`img-${index}`}
//             width={150}
//             height={200}
//             alt={project.title}
//             className="rounded-sm border-2 border-white dark:border-black"
//           />
//         )

//         const bottomContent = (
//           <div className="pb-4">
//             <div className="flex w-full flex-col gap-3 bg-primary/90 border-t border-white rounded-t-lg px-4 pb-4">
//               {/* Deskripsi */}
//               <p className="text-sm text-neutral-200 dark:text-white leading-5 pt-2">
//                 {project.description}
//               </p>

//               {/* Tombol GitHub */}
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <TextureButton
//                   variant="primary"
//                   className="flex items-center gap-2 mt-2"
//                 >
//                   <FaGithub className="text-lg" /> View on GitHub
//                 </TextureButton>
//               </a>
//             </div>
//           </div>
//         )

//         return (
//           <ShiftCard
//             key={index}
//             className="bg-card dark:bg-[#1A1A1A]"
//             topContent={topContent}
//             topAnimateContent={topAnimateContent}
//             middleContent={middleContent}
//             bottomContent={bottomContent}
//           />
//         )
//       })}
//     </div>
//   )
// }
