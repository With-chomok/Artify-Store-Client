import { useEffect, useState } from "react";
import { BsSun, BsMoonStars } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="text-xl text-accent-red hover:scale-110 transition-transform"
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default ThemeToggle;
