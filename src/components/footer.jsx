import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import "../index.css";

const Footer = () => {
    return(
        <div>
           <footer>
                <p>Author: danixl30.  
                    <h1/>
                    This is a test with NestJs and ReactJs, the complete is in my                 
                <a href="https://github.com/danixl30/crud-webversion" target="_blank"> Github</a></p>
            </footer> 
        </div>        
    )
}

export default Footer;

