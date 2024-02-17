import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllCountriesPage from "./pages/AllCountriesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<AllCountriesPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
