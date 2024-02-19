import { Suspense, lazy, useEffect, useState } from "react";
import UserInterActions from "../components/UserInterActions"
import useCountryStore from "../store/store"
import CountryPlaceholder from "../components/CountryPlaceholder";
import Pagination from "../components/Pagination";

const CountryComponent = lazy(() => import("../components/CountryComponent"));

const AllCountriesPage = () => {
  const { countries, fetchAllCountries } = useCountryStore();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countriesPerPage] = useState<number>(10);

  useEffect(() => {
    fetchAllCountries();
  }, []);

  // Get current countries
  const indexOfLastCountry: number = currentPage * countriesPerPage;
  const indexOfFirstCountry: number = indexOfLastCountry - countriesPerPage;
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)


  return (
    <div className="w-full px-5 ss:px-16 py-10 bg-VeryLightGray dark:bg-VeryDarkBlue">
       <UserInterActions />
       <div className="w-full flex flex-wrap items-center justify-center gap-8 mt-14">
            {   
                currentCountries?.map((country, i) => (
                    <Suspense key={i} fallback={<CountryPlaceholder />}> 
                        <CountryComponent country={country} />             
                    </Suspense>
                ))
            }
            <Pagination countryPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate} />
       </div>
    </div>
  )
}

export default AllCountriesPage