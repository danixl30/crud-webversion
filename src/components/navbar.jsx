import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import '../App.css'
import reactlogo from "../2507896-middle.png";

const Navegation = () => {
    return(
        <header>
            <div>
                <ul>
                    <li><img style = {{marginTop: "4px"}} src = {reactlogo} width="50"></img></li>
                    <li><Link to = "/user/signup">Signup</Link></li>
                    <li><Link to = "/user/login">Login</Link></li>
                    <li><Link to = "/home">Home</Link></li>
                </ul>
            </div>
            
        </header>
    )
}

export default Navegation;