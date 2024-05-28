'use client'
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <Link href="/">
        <p className="text-lg font-bold dark:text-white">MiLogo</p>
      </Link>
      <button
        onClick={toggleDarkMode}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"
      >
        {darkMode ? (
          <img
            src="/path-to-your-sun-icon.svg"
            alt="Light Mode"
            className="w-6 h-6"
          />
        ) : (
          <img
            src="/path-to-your-moon-icon.svg"
            alt="Dark Mode"
            className="w-6 h-6"
          />
        )}
      </button>
    </header>
  );
}
