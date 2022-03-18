
function Private(){


    function handleLogout(){
        console.log("I WANT TO LOG OUT!");
    }

    return(
        <div>
            <h1>Private</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default Private;