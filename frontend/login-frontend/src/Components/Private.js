import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/Context";
import {useNavigate} from "react-router-dom";


function Private(){

    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    const [content, setContent] = useState("content");

    useEffect(() => {
        handleCookie();
    },[]);

    function handleLogout(){
        console.log("I WANT TO LOG OUT!");
        setAuthenticated(false);
        navigate('/login');
    }

    async function handleCookie(){
        await fetch("http://localhost:8080/check", {
            method: "POST",
            credentials: 'include',
        }).then(res => {
           console.log(res.status);
           if(res.status === 200){
               setAuthenticated(true);
           }
        });
    }

    return(
        <div>
            <h1>{content}</h1>
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handleCookie}>Cookie</button>
        </div>
    )
}

export default Private;