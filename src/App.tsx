import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";
import Products from "./Components/Pages/MainThread";
import CreateProductPage from "./Components/Pages/CreateProductPage";

//const socket = io.connect('http://localhost:4000') as any;

function App() {
  const [selectedPage, setSelectedPage] = useState("Products");
  return (
    <div className="App">
      <h1>The Shop</h1>

      {/* Super basic Nav*/}
      <button
        className="NavBtn"
        onClick={() =>
          setSelectedPage(
            selectedPage == "Products" ? "CreateProduct" : "Products"
          )
        }
      >
        {selectedPage == "Products" ? "Create" : "Products"}
      </button>

      {/* Main Product thread  can also see the idivdual ones from here*/}
      {selectedPage == "Products" && <Products />}

      {/* Create product page */}
      {selectedPage == "CreateProduct" && <CreateProductPage />}
    </div>
  );
}

export default App;
