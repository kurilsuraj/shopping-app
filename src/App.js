import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import ProductsDetailsSection from "./components/ProductDetailsSection";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:id" element={<ProductsDetailsSection />} />
    </Routes>
  </BrowserRouter>
);

export default App;
