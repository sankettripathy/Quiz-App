import { ReactNode, useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <button
        className="fixed top-4 right-4 rounded-lg border px-3 py-1 text-sm 
                   bg-gray-200 dark:bg-gray-800 dark:text-gray-100"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        Toggle {theme === "dark" ? "Light" : "Dark"}
      </button>
      {children}
    </div>
  );
};
