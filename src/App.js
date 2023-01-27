import React from 'react';
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work'; 
import Contact from './components/Contact'; 
import Blog from './components/Blog'; 
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Router>
    <Home />
    <Container>
    <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Home />} />
          </Routes>
          </Container>
    </Router>
    </>
  );
}
export default App;
