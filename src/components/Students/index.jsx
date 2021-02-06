import { Component } from "react";
import SelectionHouse from "../SelectionHouse";

class Students extends Component {
  state = {
    houses: [],
  };

  findHouse = () => {
    const { characterList } = this.props;
    const { houses } = this.state;
    const Hufflepuff = characterList.filter(
      (student) => student.house === "Hufflepuff"
    );
    const Slytherin = characterList.filter(
      (student) => student.house === "Slytherin"
    );
    const Gryffindor = characterList.filter(
      (student) => student.house === "Gryffindor"
    );
    const Ravenclaw = characterList.filter(
      (student) => student.house === "Ravenclaw"
    );

    this.setState({ houses: [Hufflepuff, Slytherin, Gryffindor, Ravenclaw] });
  };

  render() {
    return (
      <>
        <SelectionHouse
          findHouse={this.findHouse}
          houses={this.state.houses}
        ></SelectionHouse>
      </>
    );
  }
}
export default Students;
