'use client';

import { useState, useEffect } from 'react';
import { HiOutlineSun } from "react-icons/hi";
import { TbMoonStars } from "react-icons/tb";

export default function ThemeSwitch({ className = 'theme-switch-fixed' }: { className?: string }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button className={className} onClick={toggleTheme}>
      {theme === 'dark' ? <HiOutlineSun className="icon icon-filter" /> : <TbMoonStars className="icon icon-filter" />}
    </button>
  );
}
