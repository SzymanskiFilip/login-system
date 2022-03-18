import {Routes, Route, BrowserRouter} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Private from "./Components/Private";
import Public from "./Components/Public";
import RequireAuth from "./Components/RequireAuth";
import {AuthContext} from "./context/Context";
import {useContext, useState} from "react";
import Home from "./Components/Home";
import BlockAuth from "./Components/BlockAuth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);


  return (
      <Routes>
          <Route path="/" element={<Home/>}/>

          <Route path="/login" element={
              <AuthContext.Provider value ={{authenticated,setAuthenticated}}>
                  <BlockAuth>
                      <LoginForm/>
                  </BlockAuth>
              </AuthContext.Provider>
            }/>

          <Route path="/public" element={<Public/>}/>

          <Route
              path="/private"
              element={
                  <AuthContext.Provider value ={{authenticated,setAuthenticated}}>
                    <RequireAuth>
                        <Private />
                    </RequireAuth>
                  </AuthContext.Provider>
              }
            />
      </Routes>
  );
}

export default App;
