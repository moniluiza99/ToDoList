import React, {useState} from 'react';

const Login= () =>{

const [username, setUsername] = useState("")
const [password, setPassword] =useState("")
const onClickHandler = () => {
    console.log(username, password)
}

    return(
        <div>
            <input type="text"
                onChange = {(e)=>{setUsername(e.target.value)}}
                value = {username}
            />
            <input type="password"
            onChange = {(e) => {setPassword(e.target.value)}}
            value = {password}
            />
            <button onClick = {onClickHandler}>Login</button>

        </div>
    )
}

export default Login