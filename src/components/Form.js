import React, { Component } from 'react'
import "./form.css"

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      newInput: {},
      oldInput: {},
    }
  }
  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name + " => " + value);
    const x = this.state.newInput;
    this.setState({
      newInput: {...x,[name]: value }
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const newValue = this.state.newInput
    this.setState({ oldInput:newValue })
  }
  render() {
    return (
      <div className='main'>
        <div className='page_title'>
          <h1>Form</h1>
        </div>
        <div className='content'>
          <div className='form'>
           <h2 style={{textAlign: "center" , marginBottom:"10px" ,color:"1"}}>Display the values below the page on form submission</h2>
            <form onSubmit={this.handleSubmit}>
              <input className='inputbox' type="text" placeholder='First Name' name='fname' onChange={this.handleChange} /><br />
              <input className='inputbox' type="text" placeholder='Last Name' name='lname' onChange={this.handleChange} /><br />
              <input className='inputbox' type="number" placeholder='age' name='age' onChange={this.handleChange} />
              <br />
              <button className='btn' type='submit'>Submit</button>
            </form>
            <br />
            <h2> Entered Information :</h2>
            <br />
            <p><strong>Nmae: </strong>{this.state.oldInput.fname} {this.state.oldInput.lname} </p><br />
            <p><strong>Age: </strong>{this.state.oldInput.age}</p>
          </div>
        </div>
      </div>
    )
  }
}
