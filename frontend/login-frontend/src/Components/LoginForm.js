import {useContext, useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {AuthContext} from "../context/Context";
import Cookies from "js-cookie";

function LoginForm(){

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [response, setResponse] = useState(401);
    const navigate = useNavigate();

    const {authenticated,setAuthenticated} = useContext(AuthContext);


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

        await fetch("http://localhost:8080/login", config)
            .then((res) => {
                console.log(res)
               if(res.status === 200){
                   console.log("Authenticating, response status = 200")
                   setResponse(res.status);
                   setAuthenticated(true);
                   redirection()
               }
            });

    }

    function redirection(){
        if(response === 200){
            navigate('/private');
        } else {
            console.log("DIALOGUE BOX, TRY AGAIN");
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
                <button onClick={login}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;