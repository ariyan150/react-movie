import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Row from './components/Row';
import Modal from './components/Modal';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <div className="App">
      <Header user='Ariyan' />
      <Row setSelectedMovie={setSelectedMovie} />
      {selectedMovie && <Modal selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
    </div>
  );
} 

export default App;
