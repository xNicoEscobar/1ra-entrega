import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Store from './Pages/Store';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route 
        path='/' 
        element={<Home/>} />
        <Route 
        path='/store' 
        element={<Store/>} />
        <Route 
        path='/product/:id' 
        element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
