import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  color: string;
  setColor: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const DEFAULT_COLOR = '#065f46';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [color, setColor] = useState(DEFAULT_COLOR);

  // Add script to set the primary color and dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.innerHTML = `
        (function() {
          try {
            document.documentElement.classList.add('dark');
            document.documentElement.style.setProperty('--primary-color', '${DEFAULT_COLOR}');
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
    return {
      isDark: true,
      setIsDark: () => {},
      color: DEFAULT_COLOR,
      setColor: () => {},
    }
  }
  return context;
};