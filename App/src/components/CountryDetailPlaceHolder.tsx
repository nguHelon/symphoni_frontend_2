

const CountryDetailPlaceHolder = () => {
  return (
    <div>
        <div className="w-full min-h-[50vh] flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div className="w-full md:w-[40%] relative h-60 flex justify-center items-center bg-gray-300 dark:bg-DarkBlue animate-pulse">
            <svg
                className="w-10 h-10 text-gray-200 dark:text-VeryDarkBlue"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
                >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
        </div>
        <div className="w-full md:w-[40%] pl-0">
            <h1 className="font-bold mb-5 h-5 w-[100px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse"></h1>
            <div className="w-full flex flex-wrap justify-between items-start 
            gap-10 ss:gap-2">
                <div className="flex flex-col gap-3">
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse">
                    </p>
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse"></p>
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse"></p>
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse"></p>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse">
                    </p>
                    <p className="font-bold h-3 w-[200px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse">
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-col ss:flex-row gap-5 ss:items-center mt-10">
                <span className="h-5 w-[150px] rounded-full bg-gray-300 dark:bg-DarkBlue animate-pulse"></span>
                    <div className="flex flex-wrap gap-3 items-center">
                        <button className="outline-none py-4 px-10 capitalize shadow-md rounded-md bg-White dark:bg-DarkBlue animate-pulse"></button>
                        <button className="outline-none py-4 px-10 capitalize shadow-md rounded-md bg-White dark:bg-DarkBlue animate-pulse"></button>
                        <button className="outline-none py-4 px-10 capitalize shadow-md rounded-md bg-White dark:bg-DarkBlue animate-pulse"></button>

                    </div> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default CountryDetailPlaceHolder