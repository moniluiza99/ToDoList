import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Login= () =>{
    const history = useHistory();
const [username, setUsername] = useState("")
const [password, setPassword] =useState("")
const onClickHandler = () => {
    console.log(username, password)
    axios.post('http://localhost:8000/login',{
        username: username,
        password: password,
    }).then((result) => {
        console.log(result)
        localStorage.setItem('keyToken', result.data.token);
        localStorage.setItem('userId', result.data.userId);
        localStorage.setItem('username', result.data.username);
        history.push('/ToDoList')
    })
}

    return(
        <div>
            <h1>Login</h1>
            <input type="text"
                onChange = {(e)=>{setUsername(e.target.value)}}
                value = {username}
            />
            <input type="password"
            onChange = {(e) => {setPassword(e.target.value)}}
            value = {password}
            />
            <button onClick = {onClickHandler}>Login</button>
            <Link to = '/register'>
            Register
            </Link>
        </div>
    )
}

export default Login