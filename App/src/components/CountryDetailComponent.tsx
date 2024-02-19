import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useCountryStore from '../store/store';

const CountryDetailComponent = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const { fetchCountryDetail, country, getBorderCountries, countries } = useCountryStore();
  const [nativeNames, setNativeNames] = useState<string[]>([]);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [languages, setlanguages] = useState<string[]>([]);

  // Get all Native names
  const getNativeName = (names: Record<string, Record<string, string>>): string[] => {
    const nativeNames: string[] = [];

    for (const name in names) {
        for (const name2 in names[name]){
            if (name2 == "common") break;
            nativeNames.push(names[name][name2])
        }
    }

    return nativeNames;
  }

  // Get all Currencies
  const getCurrencies = (currencies: { [key: string]: Record<string, string> }): string[] => {
    const allCurrencies: string[] = [];

    for (const curr in currencies) {
        for (const curr2 in currencies[curr]) {
            if (curr2 == "symbol") break;
            allCurrencies.push(currencies[curr][curr2])
        }
    }

    return allCurrencies;
  }

  // Get all languages
  const getLanguages = (languages: Record<string, string>): string[] => {
    const allLanguages: string[] = [];

    for (const lang in languages) {
        allLanguages.push(languages[lang]);
    }

    return allLanguages;
  }

  useEffect(() => {
    if ( name == undefined ) return;
    fetchCountryDetail(name);    
  }, [name])

  useEffect(() => {
    if (JSON.stringify(country) === "{}") return;
    if (country?.borders) {
        getBorderCountries(country?.borders);
    }
    setNativeNames(getNativeName(country?.name?.nativeName));
    setCurrencies(getCurrencies(country?.currencies));
    setlanguages(getLanguages(country?.languages));
  }, [country])

  return (      
    <div className="w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="w-full md:w-[40%] h-full flex justify-center items-center">
            <img className="md:w-full w-[500px] max-h-[400px] md:h-full " src={country?.flags?.png} alt={country?.flags?.alt} />
        </div>
        <div className="w-full md:w-[40%] pl-0">
            <h1 className="text-3xl ss:text-[45px] font-bold mb-5 text-VeryDarkBlueLT dark:text-White">{country?.name?.common}</h1>
            <div className="w-full flex flex-wrap justify-between items-start 
            gap-10 ss:gap-2">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Native Name: {
                        nativeNames?.map((name, i) => (
                            <span key={i} className="text-DarkGray">{name}{`${i == nativeNames.length - 1 ? "" : ", "}`}</span>
                        ))
                    }
                    </p>
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Population: <span className="text-DarkGray">{country.population}</span></p>
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Sub Region: <span className="text-DarkGray">{country.subregion}</span></p>
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Capital: <span className="text-DarkGray">{country.capital}</span></p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Currencies: {
                        currencies?.map((currency, i) => (
                            <span key={i} className="text-DarkGray">{currency}{`${i == currencies.length - 1 ? "" : ", "}`}</span>
                        ))
                    }
                    </p>
                    <p className="font-bold text-VeryDarkBlueLT dark:text-White">Languages: {
                        languages?.map((language, i) => (
                            <span key={i} className="text-DarkGray">{language}{`${i == languages.length - 1 ? "" : ", "}`}</span>
                        ))
                    }
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col ss:flex-row gap-5 ss:items-center mt-10">
                <span className="font-bold text-lg text-VeryDarkBlueLT dark:text-White">Border Countries:</span>
                {
                    country?.borders ? 
                    <div className="flex flex-wrap gap-3 items-center">
                        {
                            countries?.map((country, i) => (
                                <button
                                    key={i}
                                    className="outline-none py-2 px-5 capitalize text-DarkGray shadow-md rounded-md bg-White dark:text-White dark:bg-DarkBlue"
                                    onClick={() => {
                                        navigate(`../country-detail/${country.name.official}`)
                                    }}
                                >                                    
                                    {country.name.common}
                                </button>
                            ))
                        }
                    </div> :
                    <p className="text-DarkGray">None</p>
                }
            </div>
        </div>
    </div>
  )
} 

export default CountryDetailComponent