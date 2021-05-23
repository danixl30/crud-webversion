import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import navBar from './navbar';
import Paragrath from './paragrath';
import React_logo from './React_logo';
import Title from './title';
import logo from "../logo-small.ede75a6b.svg";

const mainComponent = () => {

    return(
        <div>        
            <Title content = "CRUD app"/>
            <Paragrath content = "This is a app with NestJs and react in the web version, made by danixl30." />
            <React_logo/>
            <img style = {{marginTop: "0px"}} className = "move2" src = {logo} width = "200"></img>
        </div>
    )
}

export default mainComponent;