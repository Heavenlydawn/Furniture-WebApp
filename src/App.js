import "./App.css";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./AllProducts";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>

      <Routes>
        <Route path="AllProducts" element={<AllProducts />} />
      </Routes>

     
    </>

    // <div>
    //   <Products />
    //   <AllProducts />
    // </div>
  );
}

export default App;
