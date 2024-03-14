import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import ProductsDetailsSection from "./components/ProductDetailsSection";
import NotFound from "./components/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<ProductsDetailsSection />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
