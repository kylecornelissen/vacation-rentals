import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Form.css';

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
        <div className="form_container">
          <article className="form_input-container">
            <label for="name">Name:</label>
    	      <input
    	        type="text"
    	        value={this.state.name}
    	        placeholder="Enter Your Name"
    	        name="name"
              onChange={this.handleChange}
    	      />
          </article>
          <article className="form_input-container">
          <label for="email">Email:</label>
    	    <input
    	      type="text"
    	      value={this.state.email}
    	      placeholder="Enter Your Email"
    	      name="email"
            onChange={this.handleChange}
    	    />
          </article>
          <article className="form_input-container">
            <label for="purpose">Purpose:</label>
            <select name="purpose" onChange={this.handleChange}>
              <option value="Business">Business</option>
              <option value="Vacation">Vacation</option>
              <option value="Other">Other</option>
            </select>
          </article>
          <Link to={() => this.verifyInputs() ? '/areas' : '/'}><button className="main_button" onClick={() => this.handleError()}>Enter</button></Link>
          </div>
      	</form>
    	)
    }
}

export default Form;
