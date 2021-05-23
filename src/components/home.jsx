import axios from 'axios';
import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import Card from './card';
import Paragrath from './paragrath';
import Title from './title';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const[user, setUser] = useState(null);
    const[notes, setNotes] = useState(null);

    const history = useHistory();

    const getUser = async () => {
        const res = await axios.get('https://crud-backend-danixl30.herokuapp.com/user/session');
        setUser(res.data.msg);
    }

    const getLogout = async () => {
        const res = await axios.get('https://crud-backend-danixl30.herokuapp.com/user/logout');
        if(res.data.msg === 'success'){
            history.push('/');
        }else{
            const msg = res.data.msg;
            alert(msg)
        }
    }

    const getNotes = async () => {
        const res = await axios.get('https://crud-backend-danixl30.herokuapp.com/notes');        
        setNotes(res.data);
    }

    const deleteNote = async (id) => {
        await axios.delete(`https://crud-backend-danixl30.herokuapp.com/notes/delete/${id}`);
        toast.success('Note deleted')
        getNotes();
    }

    const editNote = (id) => {
        history.push(`/edit/${id}`)
    }

    const newNote = () => {
        history.push('/newnote');
    }

    if(user === null){
        getUser();
    }else if(user === ""){
        return(<Redirect to="/user/login"/>);
    }
    if(!notes){
        getNotes();
    }
    console.log(notes)
    return(
        <div >
            <Title content = "Home"/>
            <h3 className = "move2 alpha">Welcome {user}</h3>
            <button className = "move2 alpha" onClick = {getLogout}>Logout</button>
            <button className = "move2 alpha" onClick = {newNote}>New Note</button>
            <h1/>
            {notes && notes.length < 1 && <Paragrath content = "You do not have notes, create a new one!!!"/>}
            {notes && notes.map((note) => (
                <Card id = {note._id} title = {note.title} content = {note.content} handleClick = {deleteNote} handleEdit = {editNote}/>                
            ))}
        </div>
    )
}

export default Home;