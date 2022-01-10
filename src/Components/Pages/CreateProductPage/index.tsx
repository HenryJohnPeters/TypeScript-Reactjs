import "./CreateProduct.css";
import React, { useState, useEffect } from "react";

export const Test: React.FC<any> = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="CreateFormContainer">
      <form>
        <b>Product Name</b>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          type="text"
          name="Product Name"
          required
        />
        <br />
        <b>Price</b>
        <br />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          type="text"
          name="Price"
          required
        />
        <br />
        <b> Email</b>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Test;
