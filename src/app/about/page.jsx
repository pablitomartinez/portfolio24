import React from "react";

export default function About() {
  return (
    <section id="about" className="h-screen py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          About
        </h2>
        <p className="text-lg text-center text-gray-700 dark:text-gray-300">
          I'm a front-end developer from Kyiv, Ukraine. I don't like to define
          myself by the work I've done. I define myself by the work I want to
          do.
        </p>
      </div>
    </section>
  );
}
