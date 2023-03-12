import './styles/style.css'
import Header from './conponents/Header';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoursePage from './conponents/CoursePage';
import AboutPage from './conponents/AboutPage';
import { useState } from 'react';
import Postlist from './conponents/Postlist';
import Post from './conponents/Post';
import ScrollToTop from './conponents/ScrollToTop';
import { NotFound } from './conponents/NotFound';
import Footer from './conponents/Footer';

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
        <ScrollToTop />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/courses/' element={<CoursePage />} />
          <Route path='/about/' element={<AboutPage />} />
          <Route path='/posts/:cat/' element={<Postlist />} />
          <Route path='/posts/:cat/:id/' element={<Post />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
