import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import navBar from './navbar';
import Paragrath from './paragrath';
import React_logo from './React_logo';
import Title from './title';

const mainComponent = () => {

    return(
        <div>        
            <Title content = "CRUD app"/>
            <Paragrath className = "move2 alpha" content = "This is a app with NestJs and react in the web version, made by danixl30." />
            <React_logo className = "move2 alpha"/>
            <img style = {{marginTop: "0px"}} className = "move2" src = "logo-small.ede75a6b.svg" width = "200"></img>
        </div>
    )
}

export default mainComponent;