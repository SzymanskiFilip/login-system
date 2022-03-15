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

        /*
                console.log("username: " + username + " password: " + password);
                axios.post("http://localhost:8080/login", payload)
                    .then(res => console.log(res));

                */

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
            .then(res => console.log(res))


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