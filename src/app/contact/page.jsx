import React from "react";

export default function Contact() {
   return (
     <section id="contact" className="h-screen py-20 bg-gray-100 dark:bg-gray-900">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
           Contact
         </h2>
         <form className="max-w-xl mx-auto">
           <div className="mb-4">
             <label
               htmlFor="name"
               className="block text-gray-700 dark:text-gray-300"
             >
               Name
             </label>
             <input
               type="text"
               id="name"
               className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="email"
               className="block text-gray-700 dark:text-gray-300"
             >
               Email
             </label>
             <input
               type="email"
               id="email"
               className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="message"
               className="block text-gray-700 dark:text-gray-300"
             >
               Message
             </label>
             <textarea
               id="message"
               className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white"
               rows="4"
             ></textarea>
           </div>
           <button
             type="submit"
             className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700"
           >
             Send Message
           </button>
         </form>
       </div>
     </section>
   );
}
