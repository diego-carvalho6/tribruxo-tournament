import { Component } from "react";
import ShowStudents from "../ShowStudents";
class SelectionHouse extends Component {
  state = {
    studentsSorted: [],
    showStudentsClicked: false,
  };
  sortHouse = () => {
    const { houses } = this.props;
    const arrCounter = [];
    const arrStudents = [];
    const housesRandom = [];
    let numberHouse = 0;
    let studentNumber = 0;

    for (let i = 0; i < houses.length - 1; ) {
      numberHouse = Math.floor(Math.random() * houses.length);
      if (arrCounter.includes(numberHouse) === true) {
      } else {
        arrCounter.push(numberHouse);
        housesRandom.push(houses[arrCounter[i]]);
        i++;
      }
    }

    housesRandom.map(
      (house, index) => (
        (studentNumber = Math.floor(
          Math.random() * housesRandom[index].length
        )),
        arrStudents.push(house[studentNumber])
      )
    );

    this.setState({
      studentsSorted: arrStudents,
      showStudentsClicked: true,
    });
  };
  renderContent = () => {
    const { findHouse } = this.props;
    this.sortHouse();
    findHouse();
  };

  render() {
    const { findHouse } = this.props;
    const { studentsSorted, showStudentsClicked } = this.state;
    return (
      <>
        <button
          onClick={() => this.renderContent()}
          className={
            showStudentsClicked === false ? "beforeClick" : "afterClick"
          }
        >
          {showStudentsClicked === false
            ? "Pronto para descobrir os seus bruxos?"
            : "Sortei seus bruxos!!!"}
        </button>
        {console.log(this.state.studentsSorted)}
        <ShowStudents studentsSorted={studentsSorted}></ShowStudents>
      </>
    );
  }
}
export default SelectionHouse;
