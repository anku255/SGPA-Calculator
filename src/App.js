import React, { Component } from "react";
import "bulma/css/bulma.min.css";
import "./App.css";

import Notification from "./Notification";
import SubjectTable from "./SubjectTable";
import GradePointTable from "./GradePointTable";

const GRADE_POINT = {
  HU501: 3,
  CS501: 4,
  CS502: 3,
  CS503: 3,
  EC501: 3,
  CS511: 2,
  CS512: 2,
  CS513: 3,
  EC511: 2
};

const TOTAL_GRADE_POINTS = 25;

class App extends Component {
  state = {
    subjects: {
      HU501: "HU501",
      CS501: "CS501",
      CS502: "CS502",
      CS503: "CS503",
      EC501: "EC501",
      CS511: "CS511",
      CS512: "CS512",
      CS513: "CS513",
      EC511: "EC511"
    },
    SGPA: null,
    showNotification: true
  };

  SelectTag = ({ name }) => {
    return (
      <div className="field column">
        <div className="control">
          <div className="select is-rounded is-primary">
            <select
              value={this.state.subjects[name]}
              onChange={e => this.handleChange(e, name)}
            >
              <option value={name}>{name}</option>
              <option value="10">EX</option>
              <option value="9">A</option>
              <option value="8">B</option>
              <option value="7">C</option>
              <option value="6">D</option>
              <option value="5">E</option>
              <option value="4">P</option>
              <option value="0">F</option>
            </select>
          </div>
        </div>
      </div>
    );
  };

  handleChange = (e, name) => {
    e.preventDefault();

    if (e.target.value !== name) {
      this.setState({
        subjects: {
          ...this.state.subjects,
          [name]: Number(e.target.value)
        }
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const grades = Object.keys(this.state.subjects).map(
      k => this.state.subjects[k]
    );

    const notSelected = grades.filter(g => typeof g !== "number");

    if (notSelected.length > 0) {
      return alert("You forgot to select grades for one or more subjects");
    }

    let total = 0;
    for (const subject of Object.keys(this.state.subjects)) {
      total = total + GRADE_POINT[subject] * this.state.subjects[subject];
    }

    const SGPA = total / TOTAL_GRADE_POINTS; // Total points = 25
    this.setState({ SGPA });
  };

  hideNotification = () => {
    this.setState({ showNotification: false });
  };

  renderSubjects = () => {
    return Object.keys(this.state.subjects).map(subject => {
      return <this.SelectTag key={subject} name={subject} />;
    });
  };

  renderSGPA = () => {
    const { SGPA } = this.state;
    if (SGPA !== null) {
      return <div className="title is-size-3 sgpa">Your SGPA: {SGPA}</div>;
    }
    return null;
  };

  render() {
    return (
      <div className="container">
        <Notification
          isVisible={this.state.showNotification}
          hideNotification={this.hideNotification}
        />
        <h1 className="header title">SGPA Calculator</h1>
        <div className="columns">{this.renderSubjects()}</div>
        <button className="button is-primary" onClick={this.handleSubmit}>
          Calculate
        </button>
        {this.renderSGPA()}
        <div className="table-container">
          <SubjectTable />
          <GradePointTable />
        </div>
      </div>
    );
  }
}

export default App;
