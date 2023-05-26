import CityPage from "./CityPage";
import HomePage from "./HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "../common/container";

function App() {
  
  return (
    <Container>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Container>
  );
}

export default App;
