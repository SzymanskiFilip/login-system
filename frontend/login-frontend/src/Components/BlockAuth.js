import {Navigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../context/Context";

function BlockAuth({children}){

    const {authenticated, setAuthenticated} = useContext(AuthContext);

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

    useEffect(() => {
        handleCookie();
    },[]);

    return authenticated === false ? children : <Navigate to="/private"/>
}

export default BlockAuth;