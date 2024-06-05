import React from "react";

export default function Projects() {
  return (
    <div className="flex justify-center items-center">
      <section
        id="projects"
        className="bg-lightBackground dark:bg-darkBackground space-y-4 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-2"
      >
        {/* TEXTO */}
        <div className="mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-left mb-8 text-primary dark:text-primaryDark">
            About
          </h2>
          <p className="text-lg text-left text-lightText dark:text-darkText">
            I'm a front-end developer from Kyiv, Ukraine. I don't like to define
            myself by the work I've done. I define myself by the work I want to
            do.
          </p>
        </div>

        {/* BOTONES */}
        <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-center items-center row-start-3">
          <button className="text-center w-[90%] px-[9px] py-[16px] border-2 border-secondary dark:border-secondaryDark bg-primary dark:bg-primaryDark text-lightText dark:text-darkText hover:bg-secondary dark:hover:bg-secondaryDark">
            DISCOVER
          </button>
          <button className="text-center w-[90%] px-[9px] py-[16px] border-2 border-secondary dark:border-secondaryDark bg-primary dark:bg-primaryDark text-lightText dark:text-darkText hover:bg-secondary dark:hover:bg-secondaryDark">
            VIEW CODE
          </button>
        </div>

        {/* IMAGEN */}
        <div className="container mx-auto px-4 row-start-2 lg:row-start-1 lg:col-start-2">
          <div className="">
            <div className="bg-secondaryLight dark:bg-secondaryDark p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primaryDark">
                Project 1
              </h3>
              <p className="text-lightText dark:text-darkText">
                Description of project 1.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


// import React from "react";

// export default function Projects() {
//   return (
//     <div className="flex justify-center items-center ">
//       <section
//         id="projects"
//         className=" bg-white dark:bg-gray-800 space-y-4 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-2"
//       >
//         {/* TEXTO  */}
//         <div className="mx-auto px-4 space-y-8">
//           <h2 className="text-3xl font-bold text-left mb-8 dark:text-white">
//             About
//           </h2>
//           <p className="text-lg text-left text-gray-700 dark:text-gray-300">
//             I'm a front-end developer from Kyiv, Ukraine. I don't like to define
//             myself by the work I've done. I define myself by the work I want to
//             do.
//           </p>
//         </div>

//         {/* ------- BOTONES  */}
//         <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-center items-center row-start-3">
//           <button className="text-center w-[90%] px-[9px] py-[16px] border-2 ">
//             DISCOVER
//           </button>
//           <button className="text-center w-[90%] px-[9px] py-[16px] border-2">
//             VIEW CODE
//           </button>
//         </div>

//         {/* ---------------- IMAGEN  */}
//         <div className="container mx-auto px-4 row-start-2 lg:row-start-1 lg:col-start-2">
//           <div className="">
//             <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
//               <h3 className="text-xl font-semibold mb-2 dark:text-white">
//                 Project 1
//               </h3>
//               <p className="text-gray-700 dark:text-gray-300">
//                 Description of project 1.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// import React from "react";

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="h-screen py-20 bg-white dark:bg-gray-800 space-y-4"
//     >
//       <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* IMAGEN */}
//         <div className="order-2 lg:order-1 flex justify-center items-center">
//           <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
//             <h3 className="text-xl font-semibold mb-2 dark:text-white">
//               Project 1
//             </h3>
//             <p className="text-gray-700 dark:text-gray-300">
//               Description of project 1.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-8 order-1 lg:order-2">
//           {/* TEXTO */}
//           <div>
//             <h2 className="text-3xl font-bold text-left mb-8 dark:text-white">
//               About
//             </h2>
//             <p className="text-lg text-left text-gray-700 dark:text-gray-300">
//               I'm a front-end developer from Kyiv, Ukraine. I don't like to
//               define myself by the work I've done. I define myself by the work I
//               want to do.
//             </p>
//           </div>

//           {/* BOTONES */}
//           <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 justify-center items-center lg:items-start">
//             <button className="text-center w-[90%] px-[9px] py-[16px] border-2">
//               DISCOVER
//             </button>
//             <button className="text-center w-[90%] px-[9px] py-[16px] border-2 lg:ml-4">
//               VIEW CODE
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
