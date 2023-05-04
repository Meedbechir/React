import React from 'react';
import Header from './components/Header';
import FirstPart from './components/FirstPart';
import './App.css';
import Testimonials from './components/Testimonials';
import SecondPart from './components/SecondPart';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstPart />
      <Testimonials />
      <SecondPart />
      <Footer />
    </div>
  );
}

export default App;
