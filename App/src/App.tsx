import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCountriesPage from "./pages/AllCountriesPage";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <div className="h-screen bg-VeryLightGray dark:bg-VeryDarkBlue">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllCountriesPage />} />
          <Route path="country-detail/:name" element={<CountryDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
