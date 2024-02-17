import { create } from "zustand";
import axios from "axios";

interface countryDetailType {
    flags: {
        alt: string,
        png: string,
        svg: string,
    },
    name: {
        nativeName: Record<string, Record<string, string>>,
        common: string,
        official: string
    },
    population: string,
    region: string,
    subregion: string,
    capital: string,
    currencies: {
        [key: string]: Record<string, string>
    },
    languages: Record<string, string>,
    borders: string[]
}

interface countryType {
    flags: {
        alt: string,
        png: string,
        svg: string,
    },
    name: {
        common: string,
        official: string
    },
    population: string,
    region: string,
    capital: string
}

interface countryStore {
    country: countryDetailType,
    countries: countryType[],
    loading: boolean,
    setLoading: (loading: boolean) => void,
    fetchAllCountries: () => Promise<void>,
    fetchCountriesByRegion: (region: string) => Promise<void>,
    fetchByCountryName: (name: string) => Promise<void>,
    fetchCountryDetail: (name: string) => Promise<void>,
    getBorderCountries: (borders: string[]) => Promise<void>,
    emptyCoutriesState: () => void
}

const useCountryStore = create<countryStore>((set) => ({
    country: {} as countryDetailType,
    countries: [],
    loading: false,
    setLoading: (loading: boolean) => {
        set({ loading})
    },
    fetchAllCountries: async () => {
        try {
            const response = await axios.get<countryType[]>("https://restcountries.com/v3.1/all");

            set({
                countries: response.data
            });

        } catch (err) {
            console.error(err);
        }
    },
    fetchCountriesByRegion: async (region: string) => {
        try {
            const response = await axios.get<countryType[]>(`https://restcountries.com/v3.1/region/${region}`);

            set({
                countries: response.data
            })
        } catch (err) {
            console.error(err);
        }
    },
    fetchByCountryName: async (name: string) => {
        try {
            const response = await axios.get<countryType[]>(`https://restcountries.com/v3.1/name/${name}`);

            console.log(response.data);

            set({
                countries: response.data
            })
        } catch(err) {
            console.error(err);
        }
    },
    fetchCountryDetail: async (name: string) => {
        try {
            const response = await axios.get<countryDetailType[]>(`https://restcountries.com/v3.1/name/${name}?fullText=true`)

            set({
                country: response.data[0]
            })
        } catch (err) {
            console.error(err);
        }
    },
    getBorderCountries: async (borders: string[]) => {
        try {

            const response = await Promise.all(borders.map(async (border) => {
                const countryDetail = await axios.get(`https://restcountries.com/v3.1/alpha/${border}`);

                return countryDetail.data[0];
            }))

            set({
                countries: response
            })

        } catch (err) {
            console.error(err);
        }
    },
    emptyCoutriesState: () => {
        set({
            countries: []
        })
    }
}))

export default useCountryStore;