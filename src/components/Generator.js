import React, { Component } from 'react'
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
        return (
            <div className="container">

                <h2 class="text-center text-primary">QR Code Generator</h2>
                
                <div class="generatorPage">
                    

                    <form className="pt-3" onSubmit={this.submitInputValue}>
                        <input type="text" onChange={(e) => this.setState({userInput: e.target.value})} className="form-control" required />

                        <button type="submit" className="mt-4 form-control btn btn-danger">Submit</button>
                    </form>

                    <div align="center" className="pt-3"><canvas id="canvas"></canvas></div>
                    
                    <p className="pt-3" id="failedParagraph">Failed to load QR Code, try again.</p>

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

        QRCode.toString('http://www.google.com', function (err, string) {
        if (err) throw err
        console.log(string)
        })
    }
}
