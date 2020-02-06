import React, { Component } from 'react';
import { BrowserRouter as Redirect, Link } from "react-router-dom";
import './Form.css';

class LogInForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      purpose: 'Business',
      inputIncomplete: true,
      error: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value});

  }

  verifyInputs = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.email) {
    	this.setState( { inputIncomplete: false } )
      this.props.changePath('/areas')
    } else {
    	this.setState( { inputIncomplete: true } )
      this.handleError()
    }
  }

  handleError = () => {
    this.state.inputIncomplete && this.setState( { error: 'Please Fill Out All Inputs' } )
  }

  render() {
  	return (
    	<form className="form_container">
    	  {this.state.error && <h2> Error! </h2>}
    	  <div>
    	  </div>
    	  <article>
          <label for="name">Name:</label>
    	    <input
    	      type="text"
    	      value={this.state.name}
    	      placeholder="Enter Your Name"
    	      name="name"
            onChange={this.handleChange}
    	    />
    	  </article>
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
          <button onClick={(e) => this.verifyInputs(e)}>Enter</button>
    	</form>
  	)
  }
}

export default LogInForm;
