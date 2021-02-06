import { Component } from "react";
import style from "./style.css";
class ShowStudents extends Component {
  render() {
    const { studentsSorted } = this.props;
    return (
      <>
        {studentsSorted.map((student, index) => (
          <div className={`studantCard ${student.house}`} key={index}>
            <h3 className={`studantName ${student.house}`}>{student.name}</h3>
            <div className={`studantImage`}>
              <img src={student.image} alt="" />
            </div>
            <p className={`studantHouse ${student.house}`}>{student.house}</p>
          </div>
        ))}
      </>
    );
  }
}

export default ShowStudents;
