import './App.css';
import Home from "./pages/Home";
import AddUser from './users/AddUser';
import Navbar from './layout/Navbar';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addUser" element={<AddUser />}></Route>
          <Route path="/editUser/:id" element={<EditUser />}></Route>
          <Route path="/viewUser/:id" element={<ViewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
