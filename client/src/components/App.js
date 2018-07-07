import React, { Component, Route } from "react";
import logo from "../hmd.svg";
import "./App.css";

class Application1 extends Component {
    render() {


        return (

            <div>
                <div class="div1">

                    <div className="App">
                        <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h2>Hamed Rohani</h2>
                        </div>
                        <p className="App-intro">
                            Full Stack Web Developer
                        </p>
                        <div class="lnk"><a href="https://linkedin.com/in/hmdroh">Linkedin</a></div>
                        <div class="lnk"><a href="https://github.com/hmdroh">Github</a></div>
                    </div>
                </div>
                {/* <div class="div2">Div 2</div> */}
            </div>
        )
    }
}

export default Application1;
