import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "jeff",
    password: "1245"
  };

  updateState = () => {
    alert(`Username: ${this.state.username} | Password: ${this.state.password} `);
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {this.state.password}</p>
        <input
          type="text"
          placeholder="Username"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button onClick={this.updateState}>Submit</button>
      </form>
    );
  }
}

export default Form;
