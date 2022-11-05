// import './App.css';
import './styles/style.css'
import Header from './conponents/Header';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourcePage from './conponents/CourcePage';
import AboutPage from './conponents/AboutPage';
import ContactPage from './conponents/ContactPage';
import { useState } from 'react';
import Postlist from './conponents/Postlist';
import Post from './conponents/Post';

function App() {
  const [active, setActive] = useState(false);
  if (active) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className='App'>
        <Header active={active} setActive={setActive} />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cource/' element={<CourcePage />} />
          <Route path='/about/' element={<AboutPage />} />
          <Route path='/contact/' element={<ContactPage />} />
          <Route path='/posts/' element={<Postlist />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
