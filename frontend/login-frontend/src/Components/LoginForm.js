import {useContext, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";

function LoginForm(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const navigate = useNavigate();
    const auth = useAuth();

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
            .then(res => console.log(res))
        //jak response ok to redirect


        //TODO: 1. Jak zaloguje to zmiana strony co wyświetla role
        //TODO: 2. Jak nie zaloguje wyświetlić błąd i jeszcze raz forme
        //TODO: 3. Dodać guzik wylogowania
        //TODO: 4. Usunąć wszytkie COOKIES jak wyloguje

    }

    const fakeAuth = (e) => {
        e.preventDefault();
        console.log(auth);
        if(auth == true){
            navigate("/private");
        }
    }

    return(
        <div>
            <form>
                <h1>Username</h1>
                <input type="text" name="username" onChange={e => setUsername(e.target.value)}/>
                <h1>Password</h1>
                <input type="text" name="password" onChange={e => setPassword(e.target.value)} />
                <br/>
                <button onClick={fakeAuth}>login</button>
            </form>
        </div>
    )
}

export default LoginForm;