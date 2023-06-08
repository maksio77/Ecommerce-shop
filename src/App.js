import React, {useState} from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const modeHandler = () => {
    setDarkMode(!darkMode);
  }

  const style = darkMode ? 'bg-black text-white overflow-hidden' : 'overflow-hidden';

  return <div className={style}>
    <Router>
      <Header darkMode={darkMode} modeHandler={modeHandler}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
      </Routes>
      <Sidebar darkMode={darkMode}/>
      <Footer/>
    </Router>
  </div>;
};

export default App;
