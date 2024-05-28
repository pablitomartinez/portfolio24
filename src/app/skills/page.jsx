import React from "react";

export default function Skill() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "GraphQL", level: "70%" },
    // Añade más habilidades aquí
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-300 rounded-full dark:bg-gray-600">
                <div
                  className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                  style={{ width: skill.level }}
                >
                  {skill.level}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
