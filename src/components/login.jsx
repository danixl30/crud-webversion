import React, { Component, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import "../index.css";
import IntupComponet from './input';
import Paragrath from './paragrath';
import Title from './title';
import axios from 'axios'
import Label from './label';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[msg, setMsg] = useState('');

   const onSubmit =  async (e) => {
        e.preventDefault();
        //console.log("data" + password + " " + username);
        if(username.length > 0 && password.length > 0){
            const res = await axios.post('https://crud-backend-danixl30.herokuapp.com/user/authenticate', {
                username: username,
                password: password
            });
            if(res.data.msg == "success"){
                setMsg(res.data.msg);
            }else{
                toast.error(res.data.msg);
            }
        }else{
            toast.warning('The boxes are empty');
        }
        
    }

    const handleChange = (name, value) => {
        if(name === 'username'){
            setUsername(value);
            //console.log(username)
        }
        if(name === 'password'){
            setPassword(value);
            //console.log(password);
        }
    }

    if(msg === 'success'){
        return(<Redirect to="/home"/>);
    }

    return(
        <div>
            <Title content = "Login"/>
            <form onSubmit = {onSubmit}>
                <Label content = "Username"/>
                <IntupComponet 
                name = "username" 
                type = "text" 
                placeholder = "Username" 
                handleChange = {handleChange}
                />
                <Label content = "Password"/>
                <IntupComponet 
                name = "password" 
                type = "password" 
                placeholder = "Password" 
                handleChange = {handleChange}
                />
                <h1/>
                <button className = "move2 alpha">Login</button>                
            </form>
        </div>
    )
}

export default Login;