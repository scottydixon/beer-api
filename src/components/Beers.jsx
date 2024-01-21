import React from "react";
import Beer from "./Beer";

class Beers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  //   componentDidUpdate() {
  //    console.log(this.state.beers);
  //   }

  render() {
    return (
      <>
        <ul className="beers-list">
          {this.state.beers.map((beer, index) => (
            <Beer name={beer.name} image={beer.image} />
          ))}
        </ul>
      </>
    );
  }
}

export default Beers;
