import React, { Component } from 'react';


class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      purpose: 'Business'
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
  	return (
  	<form>
      <label for="name">Name:</label>
  	  <input
  	    type="text"
  	    value={this.state.name}
  	    placeholder="Enter Your Name"
  	    name="name"
        onChange={this.handleChange}
  	  />
      <label for="email">Email:</label>
  	  <input
  	    type="text"
  	    value={this.state.email}
  	    placeholder="Enter Your Email"
  	    name="email"
        onChange={this.handleChange}
  	  />
      <label for="purpose">Purpose:</label>
      <select name="purpose" onChange={this.handleChange}>
        <option value="Business">Business</option>
        <option value="Vacation">Vacation</option>
        <option value="Other">Other</option>
      </select>
      <button type="button">Enter</button>
  	</form>
  	)
  }
}

export default LogInForm;
