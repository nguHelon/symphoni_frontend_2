

interface paginationType {
    countryPerPage: number,
    totalCountries: number,
    paginate: (pageNumber: number) => void
}

const Pagination = ({ countryPerPage, totalCountries, paginate }: paginationType) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalCountries / countryPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
    <div className="w-full flex flex-wrap gap-2 text-VeryDarkBlueLT justify-center items-center dark:text-White">
        {
            pageNumbers.map(number => (
                <button
                    key={number} 
                    className="px-4 py-2 rounded-lg shadow-md bg-White dark:bg-DarkBlue"
                    onClick={() => paginate(number)}
                >
                    { number }   
                </button>
            ))
        }
    </div>
  )
}

export default Pagination