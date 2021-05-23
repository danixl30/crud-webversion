import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import IntupComponet from './input';
import Paragrath from './paragrath';
import Title from './title';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[msg, setMsg] = useState('');

    const history = useHistory();

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log(title + description);
        if(title !== ''){
            const res = await axios.post('https://crud-backend-danixl30.herokuapp.com/notes/create', {
                title: title,
                content: description
            });
            toast.success('Note created successfully')
            history.push('/home');
            //console.log(res.data);            
        }else{
            toast.warning('The title not must to be empty')
        }
    }

    const handleChange = (name, value) => {
        if(name === 'title'){
            setTitle(value);
        }
        if(name === 'content'){
            setDescription(value);
        }
    }

    if(msg.msg === 'success'){
        return(<Redirect to="/home"/>)
    }

    return(
        <div className = "createEdit">
            <Title content = "Create a new note"/>
            <div className = "noteForm">
                <form onSubmit = {onSubmit}>
                    <IntupComponet name = "title" placeholder = "Title" type = "text" handleChange = {handleChange}/>
                    <h1/>
                    <textarea className = "move2 alpha" name = "content" placeholder = "Content" onChange = {e => handleChange(e.target.name, e.target.value)}/>
                    <h1/>
                    <button className = "move2 alpha">Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default Create;