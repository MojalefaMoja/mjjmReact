import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



//page
import Home from './page/Home';

function App() {
  return (
    <Router>
    <GlobalStyle />
      <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
    </Router>
  );  
}

export default App;

