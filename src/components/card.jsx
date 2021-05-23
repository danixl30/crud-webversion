import axios from 'axios';
import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import Paragrath from './paragrath';
import Title from './title';

const Card = (props) => { 
    
    const route = `/edit/${props.id}`

    return(
        <div className = "cardBody cardanim">
            <div className="courses-container">
                <div className="course">
                    <div className="course-preview">
                        <h6>Title</h6>
                        <h2>{props.title}</h2>                        
                    </div>
                    <div className="course-info">                        
                        <h6>Content</h6>
                        <h2>{props.content}</h2>
                        <div style = {{alignItems: "center"}} className = "content">
                            
                        </div>                        
                        <button className="btn" onClick = {(e) => props.handleClick(props.id)}><img className = "imgIcons" src = "Background.png" width = "20"></img></button>
                        <button className = "btn" onClick = {(e) => props.handleEdit(props.id)}><img src = "editicon.png" width = "25"></img></button>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;