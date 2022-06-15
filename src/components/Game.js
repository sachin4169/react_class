import React, { Component } from 'react';
import "./game.css";

export default class Game extends Component {
  render() {
    const container = {
      width: "50%",
      margin: "auto",
      display: "flex",
    };
    
    
    return (
      <div className='main'>
        <div className='page_title'>
          <h1>Game</h1>
        </div>
        <div className='content'>
          <div className="container" style={container}>
            <div className="row1">
              <div className="box black" id="1" ></div>
              <div className="box" id="4"></div>
              <div className="box black" id="7"></div>
            </div>
            <div className="row2">
              <div className="box" id="2"></div>
              <div className="box black" id="5"></div>
              <div className="box" id="8"></div>
            </div>
            <div className="row3">
              <div className="box black" id="3"></div>
              <div className="box" id="6"></div>
              <div className="box black" id="9"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
