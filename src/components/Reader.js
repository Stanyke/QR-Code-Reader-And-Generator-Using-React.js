import React, { Component } from 'react'
import { Link } from "react-router-dom";

import QR_Code_Scanner from '../Helpers/Scanner';

export default class Reader extends Component {

    componentDidMount(){
        QR_Code_Scanner()

        //Disable console.log file returned from the qr_packed.js in the index.html page in public directory
        window.console = (function(originalConsole){
            var api = {};
            var props = Object.keys(originalConsole);
            for (var i=0; i<props.length; i++) {
                api[props[i]] = function(){};
            }
            return api;
        })(window.console);
    }

    render() {
        const styles = {"color": "#ffffff"}
        return (
            <div>
                <div className="pb-5">
                    <nav className="navbar navbar-expand-sm fixed-top d-flex justify-content-center align-items-center">
                        <Link className="navbar-brand" to="/">
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
                            <Link className="btn btn-primary nav-link p-2" to="/">
                                QR Code Generator
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div className="container mb-5">

                    <h2 class="text-center text-primary">QR Code Scanner</h2>
                    
                    <div align="center">
                        <canvas hidden="" id="qr-canvas"></canvas>
                    </div>
                    
                    <div id="qr-result" hidden="true">
                        <span id="outputData"></span>
                    </div>
                    
                </div>

                <button className="scanButton fixed-bottom" id="btn-scan-qr">Scan QR Code</button>

           </div>
        )
    }
}
