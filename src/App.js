import {useState, useEffect} from 'react';
import { Routes,Route,Link, useNavigate } from 'react-router-dom';
import Community from "./pages/Community";
import Detail from "./pages/Detail"
import data from "./data"
import Login from "./pages/Login";
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  const [products,setProducts] = useState(data);
  return (
    <div> 
      <Routes>
        <Route path="/" element ={<Login />} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/home" element = {<Home />} />
        <Route path="/community" element= {<Community products = {products}/>} />
        <Route path="/detail/:id" element={<Detail  products = {products} />} />
      </Routes>     
    </div>
  );
}
export default App;
