import React, { Component } from 'react'
const QRCode = require('qrcode')

export default class Generator extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            userInput: ""
        }
    }
    
    render() {
        return (
            <div className="container">
                <h2 class="text-center">QR Code Generator</h2>

                <input type="text" onChange={(e) => this.setState({userInput: e.target.value})} className="form-control" required />

                <button type="button" onClick={() => this.submitInputValue()} className="mt-4 form-control btn btn-danger">Submit</button>

                <canvas id="canvas" className="mt-3"></canvas>
            </div>
        )
    }

    submitInputValue = () => {
        var canvas = document.getElementById('canvas')
 
        QRCode.toCanvas(canvas, this.state.userInput, (error) => {
            if(error){
                console.error(error)
            }
            else{
                console.log('success!');
            }
        })
    }
}
