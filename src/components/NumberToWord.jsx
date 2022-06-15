import React, { Component } from 'react'

export default class NumberToWord extends Component {

  constructor() {
    super();
    this.state = {
      num1: ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
        'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      num2: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'],
      text: "",
    }
  }
  ones(n) {
    if (Number(n) === 0) {
      console.log("ones");
      return '';
    } else {
      var word = this.state.num1[n];
      // console.log(word);
      return word;
    }

  }

  tens(n) {
    if (n < 20) {
      console.log("tens");
      return this.ones(n);
    } else {
      var n1 = (n / 10).toString()[0];
      var n2 = (n % 10).toString();
      var word = n2 === '0' ? this.state.num2[n1 - 2] : this.state.num2[n1 - 2] + "-" + this.state.num1[n2];
      // console.log(word);
      return word;
    }
  }
  hundreds(n) {
    if (Number(n) < 100) {
      console.log(n);
      return this.tens(n);
    } else {
      var n1 = (n / 100).toString()[0];
      var n2 = (n % 100)
      var word = '';
      if (Number(n2) >= 20) {
        var x = this.tens(n2)
        word = this.state.num1[n1] + " hundred " + x;
      } else {
        var y = this.ones(n2)
        word = this.state.num1[n1] + " hundred " + y;
      }
      // console.log(word)
      return word;
    }
  }
  thousands(n) {

    if (Number(n) < 1000) {
      console.log("th" + n);
      return this.hundreds(n);
    } else {
      var n1 = (n / 1000).toString().split(".")[0];
      var n2 = (n % 1000)
      var word = '';
      var x = '';
      var y = '';
      if (Number(n2) < 100) {
        if (Number(n2) < 20) {
          x = this.ones(n2)

        } else {
          x = this.tens(n2)
        }
      } else {
        x = this.hundreds(n2)
      }
      if (Number(n1) > 20) {
        y = this.tens(n1)
        word = y + " thousand " + x
      } else {
        word = this.state.num1[n1] + " thousand " + x
      }
      // console.log(word)
      return word;
    }
  }
  lakhs(n) {
    if (Number(n) < 100000) {
      return this.thousands(n)
    } else {
      var n1 = (n / 100000).toString().split(".")[0];
      var n2 = (n % 100000)
      var word = '';
      var x = this.thousands(n2);
      var y = '';
      if (Number(n1) > 20) {
        y = this.tens(n1)
        word = y + " lakh " + x
      } else {
        word = this.state.num1[n1] + " lakh " + x
      }
      // console.log(word)
      return word;
    }
  }

  crore(n) {
    var n1 = (n / 10000000).toString().split(".")[0];
    var n2 = (n % 10000000)
    var word = '';
    var x = this.lakhs(n2);
    var y = '';
    // if (Number(n2) < 100) {
    //   if (Number(n2) < 20) {
    //     x = this.ones(n2)

    //   } else {
    //     x = this.tens(n2)
    //   }
    // } else {
    //   x = this.hundreds(n2)
    // }
    if (Number(n1) > 20) {
      y = this.tens(n1)
      word = y + " crore " + x
    } else {
      word = this.state.num1[n1] + " crore " + x
    }
    // console.log(word)
    return word;
  }
  handleChange = (event) => {
    var num = event.target.value;
    var n = Number(num)
    var text;
    if (n < 20) {
      text = this.ones(n)
      this.setState({ text: text })
    }
    if (n >= 20 && n < 100) {
      text = this.tens(n);
      this.setState({ text: text })
    }
    if (n >= 100 && n < 1000) {
      text = this.hundreds(n);
      this.setState({ text: text })
    }
    if (n >= 1000 && n < 100000) {
      text = this.thousands(n);
      this.setState({ text: text })
    }
    if (n >= 100000 && n < 10000000) {
      text = this.lakhs(n);
      this.setState({ text: text })
    }
    if (n >= 10000000 && n < 1000000000) {
      text = this.crore(n);
      this.setState({ text: text })
    }

  }

  render() {
    return (
      <div className='main'>
        <div className='page_title'>
          <h1>Number To Word</h1>
        </div>
        <div className='content'>
          <div className='form'>
            <input className='inputbox' type="number" placeholder='Number' onChange={this.handleChange} />
            <br />
            <p>{this.state.text}</p>
          </div>
        </div>
      </div>
    )
  }
}
