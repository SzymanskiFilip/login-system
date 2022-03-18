import {useContext} from "react";
import {AuthContext} from "../context/Context";
import {useNavigate} from "react-router-dom";

function Private(){

    const {authenticated, setAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(){
        console.log("I WANT TO LOG OUT!");
        setAuthenticated(false);
        navigate('/login');
    }

    return(
        <div>
            <h1>Private</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Private;