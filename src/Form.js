import React, { Component } from 'react';


class LogInForm extends Component {
  render() {
  	return (
  	<form>
  	  <input 
  	    type='text'
  	    value=''
  	    placeholder='name'
  	    name='usersName'
      
  	  />
  	  <input 
  	    type='text'
  	    value=''
  	    placeholder=''
  	    name='email'
      
  	  />
  	  <input 
  	    type='text'
  	    value=''
  	    placeholder=''
  	    name='purpose'
      
  	  />
  	</form>
  	)
  }
}

export default LogInForm;


