import Login from "./component/Login";
import { Routes, Route } from "react-router-dom";

import AdminLogin from "./component/admin/AdminLogin";
import UserLogin from "./component/users/UserLogin";
import AdminPanel from "./component/admin/AdminPanel";
import Dataentry from "./component/Pharmacy/Dataentry";
import Addproducts from "./component/admin/Addproducts";
import Addsuppliers from "./component/admin/Addsuppliers";
import Addloactaion from "./component/admin/Addloactaion";
import Addgroups from "./component/admin/Addgroups";
import Stockout from "./component/Pharmacy/Stockout";
import Demo from "./component/admin/Demo";
import Stockin from "./component/Pharmacy/Stockin";
import Productslist from "./component/Pharmacy/Productslist";
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
        <Route  path="/stockin" element={<Stockin/>} />
        <Route  path="/stockout" element={<Stockout/>} />
        <Route  path="/Addsuppliers" element={<Addsuppliers/>} />
        <Route  path="/productslist" element={<Productslist/>} />
        <Route  path="/demo" element={<Demo/>} />
        <Route  path="/Addloactaion" element={<Addloactaion/>} />
    </Routes>
    </div>
  );
}

export default App;
