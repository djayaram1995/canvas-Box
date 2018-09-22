import React, { Component } from 'react';
import './AppHeader.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxWidth: window.innerWidth - (window.innerWidth/2),
      boxHeight: window.innerWidth -  (window.innerWidth/2),
      left: 0,
      top: 0
      
    };
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        boxWidth: window.innerWidth-(window.innerWidth/2),
        boxHeight: window.innerWidth-(window.innerWidth/2),
        left: 0,
        top: 0
      })
    })
  }
  forward() {
    const { boxWidth, left, top } = this.state;
    if (left===0 && top===0) {
      this.setState({
        top: 0,
        left: boxWidth-(boxWidth/5),
      })
    } else if (left===boxWidth-(boxWidth/5) && top===0) {
      this.setState({
        top: boxWidth-(boxWidth/5),
        left: boxWidth-(boxWidth/5),
      })
    } else if (left===0 && top===boxWidth-(boxWidth/5)) {
      this.setState({
        top: 0,
        left: 0,
      })
    } else if (left===boxWidth-(boxWidth/5) && top===boxWidth-(boxWidth/5)) {
      this.setState({
        top: boxWidth-(boxWidth/5),
        left: 0,
      })
    }

  }
  backward() {
    const { boxWidth, left, top } = this.state;
    if (left===0 && top===0) {
      this.setState({
        top: boxWidth-(boxWidth/5),
        left: 0,
      })
    } else if (left===0 && top===boxWidth-(boxWidth/5)) {
      this.setState({
        top: boxWidth-(boxWidth/5),
        left: boxWidth-(boxWidth/5),
      })
    } else if (left===boxWidth-(boxWidth/5) && top===boxWidth-(boxWidth/5)) {
      this.setState({
        top: 0,
        left: boxWidth-(boxWidth/5),
      })
    } else if (left===boxWidth-(boxWidth/5) && top===0) {
      this.setState({
        top: 0,
        left: 0,
      })
    }

  }
  render() {
    const { boxHeight, boxWidth, left, top } = this.state;
    return (
      <div style={{ position: "relative"}}>
        <div className="borderBox" style={{
          height: boxHeight,
          display: "inline-block",
          marginTop: '20px',
          width: boxWidth,
          position: "relative"
          }}
        >
          <div style={{
            position: "absolute",
            border: "1px solid black",
            backgroundColor: "black",
            height: boxWidth/5,
            width: boxWidth/5,
            left: left,
            top: top
          }}></div>
        </div>
        <div style={{ display: "inline-block", position: "absolute", top: "400px", right: "150px"}}>
          <div
            style={{
              width: "100px",
               height: "20px",
               cursor: "pointer",
               border: "1px solid black",
               padding: "10px 10px 10px 10px",
               backgroundColor: "lightgreen",
               color: "blue",
               textAlign: "center",
               borderRadius: "10px"
             }}
            onClick={()=> this.forward()}
          >
              Forward
          </div>
          <div
            style={{
              textAlign: "center",
              cursor: "pointer",
               marginTop: "50px",
               width: "100px",
               height: "20px",
               border: "1px solid black",
               padding: "10px 10px 10px 10px",
               backgroundColor: "lightblue",
               borderRadius: "10px"
               }}
            onClick={()=> this.backward()}
          >
              Backward
          </div>

        </div>
      </div>
    );
  }
}

export default App;
