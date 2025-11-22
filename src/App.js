import { Route, Routes } from 'react-router-dom';
import './App.css';

import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import Allorders from './components/Orders/Allorders';
import GetProducts from './components/Products/GetProducts';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login'
import AddProduct from './components/Products/AddProduct'
import Getalluser from './components/User/Getalluser'


function App() {
  return (
    <>
    
      
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />        
        <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<AddProduct/>} />
            <Route path='addproduct' element={<AddProduct/>} />            
            <Route path='getproduct' element={<GetProducts/>} />
            <Route path='getalluser' element={<Getalluser/>} />
            <Route path='allorders' element={<Allorders/>} />
        </Route>

      </Routes>

      
      
      
      
    </>
  );
}

export default App;
