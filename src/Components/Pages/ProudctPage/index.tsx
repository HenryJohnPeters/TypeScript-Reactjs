import * as React from "react";
import "./ProductPage.css";
import IProduct from "../../../Interfaces/Product";

export const Test: React.FC<any> = (props) => {
  return (
    <>
      <>
        <div className="SelectedProductContainer">
          <h3>{props.Name}</h3>
          <b>£{props.Price}</b>
          <br />
          Write Comment
          <textarea></textarea>
          {props.Comments.map((item: any, i: number) => {
            return (
              <>
                <div className="comment">
                  item
                  <button className="reactButton">Like</button>
                  <button className="reactButton">Dislike</button>
                </div>
                <br />
              </>
            );
          })}
        </div>
      </>
    </>
  );
};

export default Test;
