import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

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
    <div className="bg-White flex justify-between items-center py-3 px-5 ss:py-5 ss:px-16 shadow-lg text-VeryDarkBlueLT dark:bg-DarkBlue dark:text-White">
        <h1 className="text-lg ss:text-xl font-bold">Where in the World?</h1>
        <button
            onClick={handleThemeSwitch}
            className="font-medium"
        >
            {
                theme == "dark" ? 
                (
                    <span className="flex items-center justify-center gap-2">
                        <FaMoon />
                        Dark Mode
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <IoSunny />
                        Light Mode
                    </span>
                )
            }
        </button>
    </div>
  )
}

export default Header