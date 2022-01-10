import "./MainThread.css";
import DisplayProduct from "../../Global/Product";
import IProduct from "../../../Interfaces/Product";
import ProductPage from "../ProudctPage";
import React, { useState } from "react";

export const MainThread: React.FC<any> = (props) => {
  {
    /* Fake data this should be retrieved via api/service using useeffect with a [] */
  }
  const [products, setProducts] = useState<IProduct[]>([
    { Id: 1, Name: "Shoe", Price: 150, Comments: ["sdf", "sdf"] },
    { Id: 2, Name: "Light", Price: 100, Comments: ["sdf", "f"] },
    { Id: 3, Name: "Fridge", Price: 1230, Comments: ["sfd", "sfd"] },
    { Id: 4, Name: "Big Fridge", Price: 1230, Comments: ["sdf", "fsd"] },
    { Id: 5, Name: "Small Fridge", Price: 1220, Comments: ["fsd", "sfd"] },
    { Id: 6, Name: "Bed", Price: 1230, Comments: ["sdf", "fsd"] },
    { Id: 7, Name: "Keyboard", Price: 1202, Comments: ["sdf", "sfd"] },
    { Id: 8, Name: "Island", Price: 1200002, Comments: ["fsd", "sdf"] },
    { Id: 9, Name: "Big Fridge", Price: 1230, Comments: ["sdf", "fsd"] },
    { Id: 10, Name: "Small Fridge", Price: 1220, Comments: ["fsd", "sfd"] },
    { Id: 11, Name: "Bed", Price: 1230, Comments: ["sdf", "fsd"] },
    { Id: 12, Name: "Keyboard", Price: 1202, Comments: ["sdf", "sfd"] },
    { Id: 13, Name: "Island", Price: 1200002, Comments: ["fsd", "sdf"] },
    { Id: 14, Name: "Bed", Price: 1230, Comments: ["sdf", "fsd"] },
    { Id: 15, Name: "Keyboard", Price: 1202, Comments: ["sdf", "sfd"] },
    { Id: 16, Name: "Island", Price: 1200002, Comments: ["fsd", "sdf"] },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();

  return (
    <>
      {/* This is the indivdual project page*/}
      {selectedProduct != null && (
        <>
          <button className="BackBtn" onClick={() => setSelectedProduct(null)}>
            Back
          </button>
          <ProductPage
            Name={selectedProduct.Name}
            Price={selectedProduct.Price}
            Comments={selectedProduct.Comments}
          />
        </>
      )}

      {/* This is the Product thread*/}
      {selectedProduct == null && (
        <div>
          {products.map((item: IProduct, i: number) => {
            return (
              <span onClick={() => setSelectedProduct(item)}>
                <DisplayProduct
                  Id={item.Id}
                  Name={item.Name}
                  Price={item.Price}
                  Comments={item.Comments}
                />
              </span>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MainThread;
