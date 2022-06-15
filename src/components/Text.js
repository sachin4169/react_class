import React, { Component } from 'react'

export default class Text extends Component {
  constructor() {
    super();
    this.state ={
      text:"",
      countLetter:0,
      countWord:0,
    }
    
  };
  handleChange = (e)=>{
    var value = e.target.value;
    this.setState({text:value});
    this.setState({countLetter:value.length});
    var word = value.split(" ").length
    this.setState({countWord:word});
  }

  handleUpper = (event) => {
    event.preventDefault();
    const text =this.state.text;
    const value = text.toUpperCase();
    this.setState({text:value})
  }

  handleLower = (event) => {
    event.preventDefault();
    const text =this.state.text;
    const value = text.toLowerCase();
    this.setState({text:value})
  }

  render() {
    return (
      <div className='main'>
        <div className='page_title'>
          <h1>Text</h1>
        </div>
        <div className='content'>
          <div className='form'>
           
              <label>Text Area</label><br />

              <textarea 
              style={{width: "100%", marginBottom: "10px"}} 
              rows={4} 
              value={this.state.text}
              onChange={this.handleChange}
              ></textarea>

              <br />
              <button style={{marginRight: "10px"}} className='btn' onClick={this.handleUpper} >Upper case</button>
              <button className='btn' onClick={this.handleLower} >Lower case</button>
           
           <h3> Summary </h3>
           <p>{this.state.countWord} words and {this.state.countLetter} characters</p>
          </div>
        </div>
      </div>
    )
  }
}

