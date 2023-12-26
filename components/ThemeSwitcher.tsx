"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className=" items-center">
        <button
        className={`w-24 dark:text-slate-200 text-slate-500 right-5 top-2 p-2 rounded-md`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
        {theme === "light" ? "Dark" : "Light"}
        </button>
    </div>
  );
};