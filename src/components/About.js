import UserClass from "./UseClass";
import User from "./User";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent-Constructor");
  }

  componentDidMount() {
    // console.log("parent-componentDidMount");
  }
  render() {
    console.log("parent-Render");
    return (
      <div>
        <h1>About CLass Component</h1>
        {/* <User name={"Charan (function)"} /> */}
        <UserClass name={"Charan (class-based)"} location={"hyd- class"} />
      </div>
    );
  }
}

export default About;
