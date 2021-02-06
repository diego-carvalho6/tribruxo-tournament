import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Students from "./components/Students";
class App extends Component {
  state = {
    characterList: [],
  };
  componentDidMount() {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((body) => this.setState({ characterList: body }));
  }

  render() {
    const { characterList } = this.state;
    return (
      <div className="App">
        <Students characterList={characterList}></Students>
      </div>
    );
  }
}

export default App;
