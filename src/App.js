import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import Modal from './components/Modal';
import BoxOffice from './components/BoxOffice';

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
      </div>
    </Router>
  );
} 

export default App;
