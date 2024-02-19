import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { FaAngleDown } from "react-icons/fa";
import useCountryStore from "../store/store";

type regionsType = string[];

const regions: regionsType = ["Africa", "America", "Asia", "Europe", "Oceania"];

const UserInterActions = () => {
  const [showSelection, setShowSelection] = useState<boolean>(false);
  const [regionText, setRegionText] = useState<string>("Filter by Region");
  const [inputData, setInputData] = useState<string>("");
  const { fetchCountriesByRegion, fetchByCountryName } = useCountryStore();

  const handleClick = (region: string): void => {
    setShowSelection(false);
    fetchCountriesByRegion(region);
  }

  const fetchCountryByName = (name: string): void => {
    fetchByCountryName(name);
  }

  return (
    <div className="w-full flex flex-col ss:flex-row justify-between items-center gap-4">
        <div className="w-full ss:w-[400px] flex items-center px-5 py-3 shadow-md rounded-lg bg-White dark:bg-DarkBlue">
            <button 
                className="w-[10%]"
                onClick={() => {
                    fetchCountryByName(inputData);
                    setInputData("")
                }}
            >
                <SlMagnifier className="font-bold text-VeryDarkBlueLT dark:text-White" />
            </button>
            <input 
                type="text"
                value={inputData}
                placeholder="Search for a country..."
                className="outline-none border-0 w-[90%] pl-3 bg-transparent text-xl text-DarkGray dark:text-White"
                onChange={(e) => {
                    setInputData(e.target.value)
                }}
            />
        </div>
        <div className="relative w-full ss:w-[250px] px-5 py-3 rounded-lg shadow-md bg-White dark:bg-DarkBlue">
            <div 
                className="w-full flex items-center justify-between text-VeryDarkBlueLT dark:text-White"
                onClick={() => {
                    setShowSelection(!showSelection)
                }}
            >
                <p>{regionText}</p>
                <FaAngleDown 
                    className="text-veryDarkBlueLT dark:text-white"                    
                />
            </div>
            <div className={`absolute -bottom-[220px] left-0 w-full flex-col space-y-3 p-5 rounded-lg shadow-sm text-VeryDarkBlueLT ${showSelection ? "flex" : "hidden"} dark:text-White bg-White dark:bg-DarkBlue`}>
                {
                    regions.map((region, i) => (
                        <p 
                            key={i}
                            className="text-VeryDarkBlueLT dark:text-White hover:cursor-pointer"
                            onClick={() => {
                                setRegionText(region);
                                handleClick(region);
                            }}
                        >
                            {region}
                        </p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default UserInterActions