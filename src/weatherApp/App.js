import Header from "./Header";
import CityPage from "./CityPage/CityPage";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";
import { Container } from "../common/container";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/city/:id" element={<CityPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Container>
  );
}

export default App;
