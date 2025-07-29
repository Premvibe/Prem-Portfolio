import React, { useEffect, useState } from "react";
import { FaHome, FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";
import { PiNotebookBold } from "react-icons/pi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { icon: <FaHome />, label: "Home", href: "#" },
    {
      icon: <PiNotebookBold />,
      label: "Resume",
      href: "https://drive.google.com/drive/folders/1OQHURrKPoBxHGZXfycXemrciw4CBqotF",
    },
  ];

  const socialItems = [
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Premvibe" },
    { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/prem-kumar-366b09271/" },
    { icon: <FaInstagram />, label: "Instagram", href: "https://www.instagram.com/prem.vibe/" },
    { icon: <FaYoutube />, label: "YouTube", href: "https://www.youtube.com/@Futureache" },
  ];

  const navStyle = "group relative flex items-center";

  const iconWrapper = `p-2 rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-125 
    ${darkMode ? "text-white hover:bg-zinc-800" : "text-black hover:bg-gray-100"}`;

  const labelStyle =
    "absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap";

  const themeIconClasses =
    "transition-transform duration-300 ease-in-out transform hover:rotate-180";

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center pointer-events-none z-50 animate-fade-in">
      <div
        className={`flex items-center ${
          darkMode ? "bg-zinc-900" : "bg-white"
        } border border-gray-200 dark:border-zinc-800 shadow-lg rounded-full px-4 py-2 gap-4 pointer-events-auto transition-all duration-300 ease-in-out hover:scale-105`}
      >
        {navItems.map((item, idx) => (
          <a key={idx} href={item.href} className={navStyle} title={item.label}>
            <div className={iconWrapper}>
              {React.cloneElement(item.icon, { size: 20 })}
            </div>
            <span className={labelStyle}>{item.label}</span>
          </a>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-zinc-700 transition-colors duration-300" />

        {socialItems.map((item, idx) => (
          <a key={idx} href={item.href} className={navStyle} title={item.label}>
            <div className={iconWrapper}>
              {React.cloneElement(item.icon, { size: 20 })}
            </div>
            <span className={labelStyle}>{item.label}</span>
          </a>
        ))}

        <div className="w-px h-6 bg-gray-300 dark:bg-zinc-700 transition-colors duration-300" />

        <div className="group relative flex items-center">
          <button
            title="Theme"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`${iconWrapper} ${themeIconClasses}`}
          >
            {darkMode ? <LuSun size={20} /> : <LuMoon size={20} />}
          </button>
          <span className={labelStyle}>Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
