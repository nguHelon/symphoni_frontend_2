import { Link } from "react-router-dom"
import { countryType } from "../store/store"

interface CountryComponentType {
    country: countryType
}

const CountryComponent = ({ country }: CountryComponentType) => {
  return (
    <Link
        to={`/country-detail/${country.name.official}`}
    >
        <div                                
            className="flex-none w-[300px] rounded-lg bg-White shadow-md dark:bg-DarkBlue"
        >
            <div className="h-[200px] w-full">
                <img className="h-full w-full rounded-t-lg" src={country.flags.png} alt={country.flags.alt} />
            </div>
            <div className="p-5">
                <h1 className="text-xl font-bold mb-5 text-VeryDarkBlueLT dark:text-White">{country.name.official}</h1>
                <p className="font-semibold text-VeryDarkBlueLT dark:text-White">Population: <span className="text-DarkGray">{country.population}</span></p>
                <p className="font-semibold text-VeryDarkBlueLT dark:text-White">Region: <span className="text-DarkGray">{country.region}</span></p>
                <p className="font-semibold text-VeryDarkBlueLT dark:text-White">Capital: <span className="text-DarkGray">{country.capital}</span></p>
            </div>
        </div>
    </Link>      
  )
}

export default CountryComponent