import React from "react";
import "./app.css";
import Beers from "./components/Beers";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Beers />
      </>
    );
  }
}

export default App;
