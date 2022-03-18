import {Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Private from "./Components/Private";
import Public from "./Components/Public";
import RequireAuth from "./Components/RequireAuth";
import {AuthContext} from "./context/Context";
import {useState} from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (

        <Routes>

            <Route path="/login" element={
                <AuthContext.Provider value ={{authenticated,setAuthenticated}}>
                    <LoginForm/>
                </AuthContext.Provider>
            }
            />


            {/* PUBLIC ROUTES */}
            <Route path="/public" element={<Public/>}/>


            {/* PRIVATE ROUTES */}
            <Route
                path="/private"
                element={
                    <RequireAuth>
                        <Private />
                    </RequireAuth>

              }
            />
        </Routes>

  );
}

export default App;
