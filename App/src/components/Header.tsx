import { useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        setTheme("light");
    } else {
        document.documentElement.classList.remove('dark')
        setTheme("dark");
    }
  }, []);

  const handleThemeSwitch = (): void => {

     // if set via local storage previously
     if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setTheme("light");
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setTheme("dark");
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            setTheme("light");
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            setTheme("dark");
        }
    }
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