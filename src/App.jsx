import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import ProtectdRouter from './Components/ProtectdRouter/ProtectdRouter';
import User from './Components/Login/User/User';
import Photo from './Components/Photo/Photo';

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectdRouter>
                <User />
              </ProtectdRouter>
            }
          />
          <Route path="foto/:id" element={<Photo />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
