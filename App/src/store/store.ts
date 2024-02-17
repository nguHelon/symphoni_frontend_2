import { create } from "zustand";
import axios from "axios";

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
    country: countryType,
    countries: countryType[],
    loading: boolean,
    setLoading: (loading: boolean) => void,
    fetchAllCountries: () => Promise<void>,
    fetchCountriesByRegion: (region: string) => Promise<void>,
    fetchByCountryName: (name: string) => Promise<void>
}

const useCountryStore = create<countryStore>((set) => ({
    country: {} as countryType,
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
    }
}))

export default useCountryStore;