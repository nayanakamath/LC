import React, { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { ans1: "", c1: 0 };
    this.ref = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ ans1: this.ref.current.value });
    if (this.state.ans1 === "new delhi") {
      alert("congrats!! that is the right answer");
    } else {
      this.state.c1 = this.state.c1 + 1;
      if (this.state.c1 === 3) {
        alert("All atempts failed! SORRY!!");
      } else {
        alert("Wrong answer, please try again");
      }
    }
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          display: "inline-block",
          width: "400px",
          textAlign: "center",
          padding: "50px"
        }}
      >
        <p>Quiz</p>
        <p>Q1: Capital of India</p>

        <input
          type="text"
          placeholder="Type your answer"
          style={{ padding: "5px" }}
          ref={this.ref}
        />
        <button onClick={this.onSubmit}> Submit</button>
      </div>
    );
  }
}
export default Quiz;
