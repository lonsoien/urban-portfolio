import React from 'react';
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work'; 

import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Router>
    <Menu />
    <Container>
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Home />} />
          </Routes>
          </Container>
    </Router>
    </>
  );
}
export default App;
