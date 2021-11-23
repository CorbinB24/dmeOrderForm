import React, { Component } from "react";
import Header from "./components/headerComponent";
import Main from "./components/mainComponent";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
