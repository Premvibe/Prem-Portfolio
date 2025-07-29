import { FaHome, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { PiNotebookBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { icon: <FaHome size={20} />, label: "Home", href: "#" },
    { icon: <PiNotebookBold size={20} />, label: "Resume", href: "#" },
  ];

  const socialItems = [
    { icon: <FaGithub size={20} />, label: "GitHub", href: "#" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <FaXTwitter size={20} />, label: "Twitter", href: "#" },
    { icon: <FaYoutube size={20} />, label: "YouTube", href: "#" },
  ];

  const navStyle = "group relative flex items-center";

  const iconWrapper =
    "p-2 hover:bg-gray-100 text-black rounded-full transition";

  const labelStyle =
    "absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap";

  return (
    <div className="fixed bottom-4 inset-x-0 flex justify-center pointer-events-none z-50">
      <div className="flex items-center bg-white shadow-lg rounded-full px-4 py-2 gap-4 pointer-events-auto border border-gray-200 
                      transition-transform duration-300 ease-in-out hover:scale-105">
        {navItems.map((item, idx) => (
          <a key={idx} href={item.href} className={navStyle} title={item.label}>
            <div className={iconWrapper}>{item.icon}</div>
            <span className={labelStyle}>{item.label}</span>
          </a>
        ))}

        <div className="w-px h-6 bg-gray-300" />

        {socialItems.map((item, idx) => (
          <a key={idx} href={item.href} className={navStyle} title={item.label}>
            <div className={iconWrapper}>{item.icon}</div>
            <span className={labelStyle}>{item.label}</span>
          </a>
        ))}

        <div className="w-px h-6 bg-gray-300" />

        <div className="group relative flex items-center">
          <button
            title="Theme"
            className="p-2 hover:bg-gray-100 text-black rounded-full transition"
          >
            <LuSun size={20} />
          </button>
          <span className={labelStyle}>Theme</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
