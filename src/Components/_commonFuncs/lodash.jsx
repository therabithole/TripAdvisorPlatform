import React, { Component } from "react";
class lodAsh extends Component {
  state = {
    data: [
      { name: "a", age: 1 },
      { name: "b", age: 2 },
      { name: "c", age: 3 },
      { name: "d", age: 4 },
      { name: "e", age: 5 },
      { name: "f", age: 6 },
      { name: "g", age: 7 },
      { name: "h", age: 8 }
    ]
  };

  render() {
    console.log("loadding");
    return "loading";
  }
}

export default lodAsh;
