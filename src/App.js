import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Modal from './components/Modal';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)

  return (
    <Router>
      <div className="App">
        <Header user='Ariyan' />
          <Route path='/' exact>
            Home Page
          </Route>
          <Route path='/movies'>
            <Movies setSelectedMovie={setSelectedMovie} className='Movies'/>
            {selectedMovie && <Modal selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
          </Route>
          <Route path='/x'>
            x
          </Route>
          <Footer />
      </div>
    </Router>
  );
} 

export default App;
