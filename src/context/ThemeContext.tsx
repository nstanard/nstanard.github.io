import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  color: string;
  setColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialColor = () => {
  if (typeof window !== 'undefined') {
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      return savedColor;
    }
  }
  return '#7e22ce'; // Default color with better contrast
};

const getInitialDarkMode = () => {
  if (typeof window !== 'undefined') {
    const savedDarkMode = localStorage.getItem('dark-mode');
    if (savedDarkMode !== null) {
      return savedDarkMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return true;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(getInitialDarkMode);
  const [color, setColor] = useState(getInitialColor);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('dark-mode', isDark.toString());
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('color', color);
      document.documentElement.style.setProperty('--primary-color', color);
    }
  }, [color]);

  // Add script to prevent flash of wrong theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.innerHTML = `
        (function() {
          try {
            var mode = localStorage.getItem('dark-mode');
            var color = localStorage.getItem('color');
            if (mode === 'true' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            }
            if (color) {
              document.documentElement.style.setProperty('--primary-color', color);
            } else {
              document.documentElement.style.setProperty('--primary-color', '#7e22ce');
            }
          } catch (e) {}
        })();
      `;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 