import React, { useState } from 'react';
import './game.css'

const Game = () => {
  const [count, setCount] = useState(0)

  const container = {
    width: "50%",
    margin: "auto",
    display: "flex",
    justifyContent:'center'
  };
  function check() {
    var num= 0;
    var len =document.getElementsByClassName("box").length;
    console.log(len);
    for (let i = 0; i < len; i++) {
        var x = document.getElementsByClassName("box")[i].className.split(/\s+/);  
            if (x[1] === 'black') {
                console.log(x[1]);
                num++;
            }
    }
    if(num === 0){
        alert("you won")
    }
  }
  function handleClick1() {
    console.log("clicked1");
    document.getElementById('1').classList.toggle("black");
    document.getElementById('2').classList.toggle("black");
    document.getElementById('4').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick2() {
    console.log("clicked2");
    document.getElementById('1').classList.toggle("black");
    document.getElementById('2').classList.toggle("black");
    document.getElementById('3').classList.toggle("black");
    document.getElementById('5').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick3() {
    console.log("clicked3");
    document.getElementById('2').classList.toggle("black");
    document.getElementById('3').classList.toggle("black");
    document.getElementById('6').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick4() {
    console.log("clicked4");
    document.getElementById('1').classList.toggle("black");
    document.getElementById('4').classList.toggle("black");
    document.getElementById('5').classList.toggle("black");
    document.getElementById('7').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick5() {
    console.log("clicked5");
    document.getElementById('2').classList.toggle("black");
    document.getElementById('4').classList.toggle("black");
    document.getElementById('5').classList.toggle("black");
    document.getElementById('6').classList.toggle("black");
    document.getElementById('8').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick6() {
    console.log("clicked6");
    document.getElementById('3').classList.toggle("black");
    document.getElementById('5').classList.toggle("black");
    document.getElementById('6').classList.toggle("black");
    document.getElementById('9').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick7() {
    console.log("clicked7");
    document.getElementById('4').classList.toggle("black");
    document.getElementById('7').classList.toggle("black");
    document.getElementById('8').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick8() {
    console.log("clicked8");
    document.getElementById('5').classList.toggle("black");
    document.getElementById('7').classList.toggle("black");
    document.getElementById('8').classList.toggle("black");
    document.getElementById('9').classList.toggle("black");
    setCount(count+1)
    check()
  }
  function handleClick9() {
    console.log("clicked9");
    document.getElementById('6').classList.toggle("black");
    document.getElementById('8').classList.toggle("black");
    document.getElementById('9').classList.toggle("black");
    setCount(count+1)
    check()
  }

  return (
    <div className='main'>
      <div className='page_title'>
        <h1>Game</h1>
      </div>
      <div className='content'>
      <div style={{textAlign:"center" , display:'flex', justifyContent:"center"}}>
        <h1>Score: {count}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
        <button className='btn' onClick={() => window.location.reload(false)}>ReStart</button>
      </div>
        <div className="container" style={container}>
        
          <div className="row1">
            <div className="box black" id="1" onClick={handleClick1}></div>
            <div className="box" id="4" onClick={handleClick4}></div>
            <div className="box black" id="7" onClick={handleClick7}></div>
          </div>
          <div className="row2">
            <div className="box" id="2" onClick={handleClick2}></div>
            <div className="box black" id="5" onClick={handleClick5}></div>
            <div className="box" id="8" onClick={handleClick8}></div>
          </div>
          <div className="row3">
            <div className="box black" id="3" onClick={handleClick3}></div>
            <div className="box" id="6" onClick={handleClick6}></div>
            <div className="box black" id="9" onClick={handleClick9}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game