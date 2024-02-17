import { useEffect } from "react";
import UserInterActions from "../components/UserInterActions"
import useCountryStore from "../store/store"
import { Link } from "react-router-dom";

const AllCountriesPage = () => {
  const { countries, fetchAllCountries, loading, setLoading } = useCountryStore();

  useEffect(() => {
    setLoading(true);
    fetchAllCountries();
    setLoading(false);
  }, []);

  return (
    <div className="w-full px-5 ss:px-16 py-10 bg-VeryLightGray dark:bg-VeryDarkBlue">
       <UserInterActions />
       <div className="w-full flex flex-wrap items-center justify-center gap-8 mt-14">
            {   loading ? (
                    <div>Loading...</div>
                ) :
                    countries?.map((country, i) => (
                        <Link
                            key={i}
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
                    ))
            }
       </div>
    </div>
  )
}

export default AllCountriesPage