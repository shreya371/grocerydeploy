
import './App.css';
import Login from './Components/Authentication/Login';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/HomePage/Home';

import { useState } from 'react';

import Carousel from './Components/HomePage/Carousel';
import Categories from './Components/HomePage/Categories';
import Navbar from './Components/HomePage/Navbar';
import Profile from './Components/HomePage/Profile';
import Cart from './Components/HomePage/Cart';
import Searchbar from './Components/HomePage/Searchbar';
import Signup from './Components/Authentication/Signup';

function App() {

  const [username1, setUsername1] = useState("")
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home username1={username1} />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/searchbar" element={<Searchbar />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
