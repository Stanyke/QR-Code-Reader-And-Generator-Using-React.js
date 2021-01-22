import React, { Component } from 'react'
import { Link } from "react-router-dom";
const QRCode = require('qrcode')

export default class Generator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userInput: ""
        }
    }

    componentDidMount(){
        document.getElementById('failedParagraph').style.display = 'none'
        document.getElementById('canvas').style.display = 'none'
    }
    
    render() {
        const styles = {"color": "#ffffff"}
        return (
            <div>
                <div className="pb-5">
                    <nav className="navbar navbar-expand-sm fixed-top d-flex justify-content-center align-items-center">
                        <Link className="navbar-brand text-danger" to="/">
                        QR Code Generator/Scanner
                        </Link>

                        <button
                        class="navbar-toggler navbar-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                        >
                        <span class="navbar-toggler-icon" style={styles}></span>
                        </button>
                        <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <br/>
                            <li class="nav-item">
                            <Link className="btn btn-primary nav-link p-2" to="/scanner">
                                QR Code Scanner
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">

                    <h2 class="text-center text-primary">QR Code Generator</h2>
                    
                    <div class="generatorPage">
                        

                        <form className="pt-3" onSubmit={this.submitInputValue}>
                            <input type="text" placeholder="Type then hit the button/Enter key" onChange={(e) => this.setState({userInput: e.target.value})} className="form-control" required />

                            <button type="submit" className="mt-4 form-control btn btn-danger">Submit</button>
                        </form>

                        <div align="center" className="pt-3"><canvas id="canvas"></canvas></div>
                        
                        <p className="pt-3" id="failedParagraph">Failed to load QR Code, try again.</p>

                    </div>
                </div>
           </div>
        )
    }

    submitInputValue = (event) => {
        event.preventDefault();

        let canvas = document.getElementById('canvas')
        let failedParagraph = document.getElementById('failedParagraph')

        
        QRCode.toCanvas(canvas, this.state.userInput, (error) => {
            if(error){
                console.error(error)
                canvas.style.display = 'none';
                failedParagraph.style.display = 'block'
            }
            else{
                canvas.style.display = 'block';
                failedParagraph.style.display = 'none'
            }
        })
    }
}
