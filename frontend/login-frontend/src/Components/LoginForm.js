import {useState} from "react";
import axios from "axios";

function LoginForm(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    async function login(e){
       e.preventDefault();

        let payload = {
            "username": username,
            "password": password
        };

        let config = {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        };

        fetch("http://localhost:8080/login", config)
            .then(res => console.log(res));

        //TODO: 1. Jak zaloguje to zmiana strony co wyświetla role
        //TODO: 2. Jak nie zaloguje wyświetlić błąd i jeszcze raz forme

    }


    return(
        <div>
            <form>
                <h1>Username</h1>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
                <h1>Password</h1>
                <input type="text" name="password" onChange={e => setPassword(e.target.value)} />
                <br/>
                <button onClick={login}>login</button>
            </form>
        </div>
    )
}

export default LoginForm;