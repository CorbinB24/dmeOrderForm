import React, { Component } from "react";
import Header from "./components/headerComponent";
import Main from "./components/mainComponent";
import Form from "./components/form";



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Form />
      </div>
    );
  }
}

export default App;
