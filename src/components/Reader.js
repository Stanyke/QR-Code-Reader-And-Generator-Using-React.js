import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Reader extends Component {
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
                            <Link className="btn btn-outline-info nav-link p-2" to="/">
                                QR Code Generator
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">

                    <h2 class="text-center text-primary">QR Scanner</h2>
                    
                    
                </div>
           </div>
        )
    }
}
