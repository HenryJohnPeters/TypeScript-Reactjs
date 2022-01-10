import * as React from "react";
import "./NavBar.css";
export interface TestProps {
  Name: string;
  comments: string[];
  Price: number;
}

//Did not use this in the end this approach would work well with react router
//however I decided to just go with condtional rendering as its a small project
class Test extends React.Component {
  state = { count: 0 };
  render() {
    return (
      <>
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </>
    );
  }
}

export default Test;
