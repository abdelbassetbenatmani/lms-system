"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";

function Switcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // const handleSwitch = () => {
  //     setIsDarkMode(!isDarkMode);
  // };

  return (
    <div className="flex justify-center items-center">
      {theme === "dark" ? (
        <FiSun
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("light")}
        />
      ) : (
        <FaRegMoon
          fill="black"
          className="cursor-pointer"
          size={20}
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default Switcher;
