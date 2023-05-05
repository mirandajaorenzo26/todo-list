import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { Tooltip } from 'react-tippy';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('color-theme');
  });

  useEffect(() => {
    localStorage.setItem('color-theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      setTheme('light');
      return;
    }
    document.documentElement.classList.add('dark');
    setTheme('dark');
  };

  return (
    <>
      <Tooltip title='Switch Theme' position='top' trigger='mouseenter'>
        <button
          type='button'
          onClick={handleThemeSwitch}
          className='hover:scale-105'>
          {theme === 'dark' ? (
            <MdOutlineDarkMode size={32} />
          ) : (
            <MdOutlineLightMode size={32} />
          )}
        </button>
      </Tooltip>
    </>
  );
}
