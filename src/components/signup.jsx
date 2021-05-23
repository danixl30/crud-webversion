import React, { Component, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import "../index.css";
import IntupComponet from './input';
import Paragrath from './paragrath';
import Title from './title';
import axios from 'axios'
import Label from './label';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[confirm_password, setConfirmP] = useState('');
    const[msg, setMsg] = useState('');

   const onSubmit =  async (e) => {
        e.preventDefault();
        //console.log("data" + password + " " + username);
        if(username.length > 0 && password.length > 0 && confirm_password.length > 0){
            if(password === confirm_password){
                const res = await axios.post('https://crud-backend-danixl30.herokuapp.com/user/register', {
                    username: username,
                    password: password,
                    confirm_password: confirm_password
                });
                if(res.data.msg == "success"){
                    setMsg(res.data.msg);
                    toast.success("User created successfully");
                }else{
                    //alert(res.data.msg);
                    toast.error(res.data.msg);
                }
            }else{
                toast.warning('The passwords are not the same');
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
        if(name === 'confirmPassword'){
            setConfirmP(value)
        }
    }

    if(msg == 'success'){
        return(<Redirect to="/user/login"/>)        
    }

    return(
        <div>
            <Title content = "Signup"/>
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
                <Label content = "Confirm password"/>
                <IntupComponet 
                name = "confirmPassword" 
                type = "password" 
                placeholder = "Confirm your password" 
                handleChange = {handleChange}
                />
                <h1/>
                <button className = "move2 alpha">Signup</button>                
            </form>
        </div>
    )
}

export default Signup;