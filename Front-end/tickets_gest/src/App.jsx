import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/login";
import Register from "./components/pages/Register";
import "./App.css";
import EmployeePage from "./components/pages/EmployeePage";

import EmployeeTable from "./components/pages/EmployeeTable";
function App() {
  return (
    <div className="App">
      <EmployeePage />
      <Routes>
        <Route path="Login" exact element={<Login />} />
        <Route path="Register" exact element={<Register />} />
        <Route path="listemployee" exact element={<EmployeeTable />} />
      </Routes>
    </div>
  );
}

export default App;
