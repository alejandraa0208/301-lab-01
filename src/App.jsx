import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './assets/data.json';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';

function App() {
  const [selectedBeast, setSelectedBeast] = React.useState(null);

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast);
  };

  const handleModalClose = () => {
    setSelectedBeast(null);
  }

  return (
   <>
    <Header />
    <Gallery data={data} onBeastSelect={handleBeastSelect}/>
    <SelectedBeast selectedBeast={selectedBeast} onClose={handleModalClose} />
    <Footer />
  </>
  )
}

export default App
