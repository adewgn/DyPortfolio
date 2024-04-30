import React from 'react';

import { Service, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Service />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
