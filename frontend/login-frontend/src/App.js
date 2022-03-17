import {Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Authenticated from "./Components/Authenticated";
import Public from "./Components/Public";
import RequireAuth from "./Components/RequireAuth";

function App() {
  return (
      <Routes>
          <Route path="/login" element={<LoginForm/>}/>

          {/* PUBLIC ROUTES */}
          <Route path="/public" element={<Public/>}/>


          {/* PRIVATE ROUTES */}
          <Route element={<RequireAuth/>}>
            <Route path="/authenticated" element={<Authenticated/>}/>
          </Route>
      </Routes>
  );
}

export default App;
