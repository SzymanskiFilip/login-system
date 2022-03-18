import {Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Private from "./Components/Private";
import Public from "./Components/Public";
import RequireAuth from "./Components/RequireAuth";
import {AuthContext} from "./context/Context";
import {useState} from "react";
import RequireNoAuth from "./Components/RequireNoAuth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
      <AuthContext.Provider value ={{authenticated,setAuthenticated}}>
        <Routes>
            <Route path="/login" element={
                    <RequireNoAuth>
                        <LoginForm/>
                    </RequireNoAuth>
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
       </AuthContext.Provider>

  );
}

export default App;
