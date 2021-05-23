import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import "../index.css";
import IntupComponet from './input';
import Paragrath from './paragrath';
import Title from './title';
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const[msg, setMsg] = useState('');
    const[note, setNote] = useState('');

    let { id } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();
        //console.log(title + description);
        if(title !== ''){
            const res = await axios.put(`https://crud-backend-danixl30.herokuapp.com/notes/edit/${id}`, {
                title: title,
                content: description
            });
            if(res.data.msg === 'success'){
                toast.success('Note updated successfully');
                setMsg(res.data.msg);
            }
            console.log(msg);
            if(msg === 'error'){
                toast.error('Sorry, we have an error');
            }
        }else{
            toast.warning('The title not must to be empty')
        }
    }

    const getNote = async () => {
        const res = await axios.get(`https://crud-backend-danixl30.herokuapp.com/notes/edit/${id}`);
        setNote(res.data);
        console.log(res.data);
        console.log(note);
        setTitle(res.data.title);
        setDescription(res.data.content);
    }

    const handleChange = (name, value) => {
        if(name === 'title'){
            setTitle(value);
        }
        if(name === 'content'){
            setDescription(value);
        }
    }

    //console.log(id);

    if(msg === 'success'){
        return(<Redirect to="/home"/>)
    }

    if(note === ''){
        getNote();
    }

    return(
        <div className = "createEdit">
            <Title content = "Update a note"/>
            <div className = "noteForm">
                <form onSubmit = {onSubmit}>
                    <IntupComponet value = {title} name = "title" placeholder = "Title" type = "text" handleChange = {handleChange}/>
                    <h1/>
                    <textarea className = "move2 alpha" value = {description} name = "content" placeholder = "Content" onChange = {e => handleChange(e.target.name, e.target.value)}/>
                    <h1/>
                    <button className = "move2 alpha">Update</button>
                </form>
            </div>
            
        </div>
    )
}

export default Edit;