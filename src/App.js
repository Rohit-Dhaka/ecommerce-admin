import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard';
import AddProduct from './pages/Products/AddProduct';
import GetProducts from './pages/Products/GetProducts';
import Getalluser from './components/Getalluser';
import Allorders from './components/Allorders';

function App() {
  return (
    <>
    <Navbar/>
      
      
      <Routes>
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
