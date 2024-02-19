import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import useCountryStore from '../store/store';
import { FaArrowLeftLong } from "react-icons/fa6";
import CountryDetailPlaceHolder from '../components/CountryDetailPlaceHolder';

const CountryDetailComponent = lazy(() => import("../components/CountryDetailComponent"));

const CountryDetail = () => {
  const { emptyCountriesState } = useCountryStore();

  return (
    <div className="w-full h-auto px-5 ss:px-16 py-10 bg-VeryLightGray dark:bg-VeryDarkBlue">
        <div className="w-full flex justify-start items-center">
            <Link to="/">
                <button 
                    className="py-2 px-8 rounded-lg shadow-md flex justify-center items-center space-x-3 bg-White text-VeryDarkBlueLT dark:text-White dark:bg-DarkBlue"
                    onClick={() => {
                        emptyCountriesState();
                    }}
                >
                    <FaArrowLeftLong />
                    <span>Back</span>
                </button>
            </Link>
        </div>
        <Suspense fallback={<CountryDetailPlaceHolder />}>
            <CountryDetailComponent />
        </Suspense>
    </div>
  )
} 

export default CountryDetail