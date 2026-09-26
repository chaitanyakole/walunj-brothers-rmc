import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export const THEMES = {
  BLUEPRINT: 'blueprint',
  INDUSTRIAL: 'industrial',
};

export const THEME_DETAILS = {
  blueprint: {
    id: 'blueprint',
    name: 'Architectural Blueprint',
    shortName: 'Blueprint',
    mode: 'Light',
    isPrimary: true,
    color: '#0f4c81',
    accent: '#f59e0b',
    description: 'Primary Theme • Crisp daylight canvas, blueprint cobalt & safety amber',
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial Heavy-Duty',
    shortName: 'Industrial',
    mode: 'Dark',
    isPrimary: false,
    color: '#f59e0b',
    accent: '#ea580c',
    description: 'High-contrast obsidian, molten amber & glowing accents',
  },
};

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('wb_rmc_theme');
        if (saved === THEMES.INDUSTRIAL) {
          return THEMES.INDUSTRIAL;
        }
      } catch {
        // LocalStorage access might fail in private browsing
      }
    }
    // Blueprint is the primary theme
    return THEMES.BLUEPRINT;
  });

  const applyTheme = (targetTheme) => {
    const root = document.documentElement;

    // 1. Temporarily freeze all transitions so all text and background colors change instantaneously (0ms delay)
    root.classList.add('disable-transitions');

    root.setAttribute('data-theme', targetTheme);

    if (targetTheme === THEMES.INDUSTRIAL) {
      root.classList.add('dark', 'theme-industrial');
      root.classList.remove('theme-blueprint');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark', 'theme-industrial');
      root.classList.add('theme-blueprint');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem('wb_rmc_theme', targetTheme);
    } catch {
      // LocalStorage access might fail in private browsing
    }

    // 2. Force synchronous DOM reflow so browser commits the color swap immediately in the same paint cycle
    void root.offsetHeight;

    // 3. Re-enable interactive hover transitions on the next animation frame
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove('disable-transitions');
      });
    });
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = (newTheme) => {
    if (newTheme === THEMES.BLUEPRINT || newTheme === THEMES.INDUSTRIAL) {
      setThemeState(newTheme);
      applyTheme(newTheme);
    }
  };

  const toggleTheme = () => {
    const next = theme === THEMES.BLUEPRINT ? THEMES.INDUSTRIAL : THEMES.BLUEPRINT;
    setTheme(next);
  };

  const isDark = theme === THEMES.INDUSTRIAL;
  const isBlueprint = theme === THEMES.BLUEPRINT;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        isBlueprint,
        setTheme,
        toggleTheme,
        currentDetails: THEME_DETAILS[theme] || THEME_DETAILS.blueprint,
        details: THEME_DETAILS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
