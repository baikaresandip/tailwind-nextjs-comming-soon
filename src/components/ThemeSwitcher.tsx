"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"


export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  const currentTheme = theme === "system" ? systemTheme : theme
  
  return (
    <div className="">
        <button 
        className="text-slate-500 p-2 bg rounded-full border-slate-50	"
        onClick={() => { currentTheme === "light" ?
            setTheme("dark") :
            setTheme("light")
        }}
        >
        { currentTheme === "light" ? "DARK" : "LIGHT" }
        </button>
        {/* {currentTheme === "light" ? (
            <MoonIcon
                className="size-5 cursor-pointer text-slate-700"
                onClick={() => {
                    setTheme("dark")
                }}
            />
      ) : (
        <SunIcon
            className="size-5 cursor-pointer text-yellow-400"
            onClick={() => {
                setTheme("light")
            }}
        />
      )} */}
    </div>
  );
};