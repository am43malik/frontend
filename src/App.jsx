import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "./component/admin/AdminLogin";
import UserLogin from "./component/users/UserLogin";
import AdminPanel from "./component/admin/AdminPanel";
import Dataentry from "./component/Pharmacy/Dataentry";
import Addproducts from "./component/Pharmacy/Addproducts";
import Addsuppliers from "./component/Pharmacy/Addsuppliers";
import Addloactaion from "./component/Pharmacy/Addloactaion";
import Addgroups from "./component/admin/Addgroups";
function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/adminlogin" element={<AdminLogin />}/>
      <Route path="/addgroups" element={<Addgroups />}/>
      <Route path="/adminpanel" element={<AdminPanel />}/>
        <Route  path="/userlogin" element={<UserLogin/>} />
        <Route  path="/dataentry" element={<Dataentry/>} />
        <Route  path="/addproducts" element={<Addproducts/>} />
        <Route  path="/Addsuppliers" element={<Addsuppliers/>} />
        <Route  path="/Addloactaion" element={<Addloactaion/>} />
    </Routes>
    </div>
  );
}

export default App;
