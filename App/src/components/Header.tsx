import { useEffect, useState } from "react"

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = (): void => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="bg-White flex justify-between items-center py-5 px-16 shadow-lg text-VeryDarkBlueLT dark:bg-DarkBlue dark:text-White">
        <h1 className="text-xl font-bold">Where in the World?</h1>
        <button
            onClick={handleThemeSwitch}
            className="font-medium"
        >
            Dark Mode
        </button>
    </div>
  )
}

export default Header