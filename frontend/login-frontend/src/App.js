import {Routes, Route} from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Private from "./Components/Private";
import Public from "./Components/Public";

function App() {
  return (
      <Routes>
          <Route path="/login" element={<LoginForm/>}/>

          {/* PUBLIC ROUTES */}
          <Route path="/public" element={<Public/>}/>


          {/* PRIVATE ROUTES */}
          <Route path="/private" element={<Private/>}/>

      </Routes>
  );
}

export default App;
