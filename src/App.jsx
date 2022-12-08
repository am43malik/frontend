import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "./component/admin/AdminLogin";
import UserLogin from "./component/users/UserLogin";
import AdminPanel from "./component/admin/AdminPanel";
import Dataentry from "./component/Pharmacy/Dataentry";
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/adminpanel" element={<AdminPanel />}/>
        <Route  path="/userlogin" element={<UserLogin/>} />
        <Route  path="/dataentry" element={<Dataentry/>} />
    </Routes>
    </div>
  );
}

export default App;
