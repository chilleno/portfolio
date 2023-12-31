'use client';
import { useState, useEffect } from 'react';
import Header from "../Components/Header";
import MainText from '../cv/Components/MainText';
import Experience from '../cv/Components/Experience';
import Footer from "../Components/Footer";

let className = {
  main: {
    dark: "min-h-screen bg-black",
    light: "min-h-screen bg-white",
  }
}

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (typeof localStorage.darkMode !== 'undefined') {
      setDarkMode(localStorage.darkMode === "true");
    }
  }, []);

  return (
    <main className={darkMode ? className.main.dark : className.main.light}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <MainText
        darkMode={darkMode}
      />
      <Experience
        darkMode={darkMode}
      />
      <Footer
        darkMode={darkMode}
      />
    </main>
  )
}
