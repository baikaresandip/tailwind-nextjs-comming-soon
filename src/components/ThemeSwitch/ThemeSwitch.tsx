"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>    
      <button
        className="button"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >       
        <span className="p-2"> { theme === "dark" ? "Light" : "Dark" } </span>         
      </button>
    </>
  );
};

export default ThemeSwitch;
