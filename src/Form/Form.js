import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      purpose: 'Business',
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  verifyInputs = () => {
    return this.state.name && this.state.email
  }


  handleError = () => {
    if (!this.verifyInputs()) {
      this.setState( { error: 'Please Fill Out All Inputs' } )
    }
    this.submitUser()
  }

  submitUser = props => {

    this.props.addUser( {name: this.state.name, purpose: this.state.purpose} )
  }

  render() {
  	return (
    	<form autoComplete="off">
        {this.state.error && <h2>{this.state.error}</h2>}
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
        <Link to={() => this.verifyInputs() ? '/areas' : '/'}><span onClick={() => this.handleError()}>Enter</span></Link>
    	</form>
  	)
  }
}

export default Form;
