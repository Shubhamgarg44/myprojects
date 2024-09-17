import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Manager from './component/Manager';
import Footer from './component/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className='flex-grow'>
        <Manager />
      </div>
      <Footer />
    </div>
  );
}

export default App;
