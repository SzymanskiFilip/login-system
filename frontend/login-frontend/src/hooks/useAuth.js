import React from 'react';
import {useState, useEffect} from "react";

function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
       setAuthenticated(true);
    },[]);

    return authenticated;
}

export default useAuth;