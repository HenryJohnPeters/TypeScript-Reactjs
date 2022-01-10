import * as React from "react";
import IProduct from "../../../Interfaces/Product";
import "../../../Interfaces/Product";
import "./Product.css";
{
  /* This is Mapped out on the product page*/
}
class Product extends React.Component<IProduct> {
  state = { count: 0 };
  render() {
    return (
      <div className="ProductContainer">
        <h3>{this.props.Name}</h3>
        <h3>£{this.props.Price}</h3>
        <h3>{this.props.Comments}</h3>
      </div>
    );
  }
}

export default Product;
