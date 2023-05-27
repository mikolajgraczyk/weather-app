import CityPage from "./CityPage";
import HomePage from "./HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "../common/container";

function App() {
  
  return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
  );
}

export default App;
