import React, { Component } from 'react'

export default class Text extends Component {
  constructor(){
    super();
  };

  handlesubmit = (event)=>{
    event.preventDefault()
  }
  render() {
    return (
      <div className='main'>
        <div className='page_title'>
          <h1>Text</h1>
        </div>
        <div className='content'>
        <form onSubmit={this.handlesubmit}> 
          <label>Text Area</label>
          <textarea rows={4}></textarea>
          <button className='btn' >Upper case</button>
          <button className='btn' >Lover case</button>
        </form>
        </div>
      </div>
    )
  }
}

