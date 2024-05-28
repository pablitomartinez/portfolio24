import React from 'react'

export default function Projects() {
 return (
   <section id="projects" className="py-20 bg-white dark:bg-gray-800">
     <div className="container mx-auto px-4">
       <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
         Projects
       </h2>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
           <h3 className="text-xl font-semibold mb-2 dark:text-white">
             Project 1
           </h3>
           <p className="text-gray-700 dark:text-gray-300">
             Description of project 1.
           </p>
         </div>
         <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
           <h3 className="text-xl font-semibold mb-2 dark:text-white">
             Project 2
           </h3>
           <p className="text-gray-700 dark:text-gray-300">
             Description of project 2.
           </p>
         </div>
         <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
           <h3 className="text-xl font-semibold mb-2 dark:text-white">
             Project 3
           </h3>
           <p className="text-gray-700 dark:text-gray-300">
             Description of project 3.
           </p>
         </div>
       </div>
     </div>
   </section>
 );
}
