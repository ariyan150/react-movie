import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
// import Cookie from "js-cookie"
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Modal from './components/Modal';

import Register from './components/register/Register';


function App() {
  const [selectedMovie, setSelectedMovie] = useState(null)


  return (
    <Router>
      <div className="App">
        <Header user='Ariyan' />
          <Route path='/' exact>
            {false ? <Redirect to="/movies" /> : 'Home Page'}
            
          </Route>
          <Route path='/movies'>
            <Movies setSelectedMovie={setSelectedMovie} className='Movies'/>
            {selectedMovie && <Modal selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />}
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Footer />
      </div>
    </Router>
  );
} 

export default App;
