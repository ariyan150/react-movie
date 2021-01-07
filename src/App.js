import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Modal from './components/Modal';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <div className="App">
      <Header user='Ariyan' />
      <Movies setSelectedMovie={setSelectedMovie} className='Movies'/>
      {selectedMovie && <Modal selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
    </div>
  );
} 

export default App;
