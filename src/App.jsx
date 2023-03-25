import './styles/style.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { TailSpin } from 'react-loading-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const CoursePage = lazy(() => sleep(500).then(() => import('./conponents/CoursePage')));
const Header = lazy(() => import('./conponents/Header'));
const HomePage = lazy(() => import('./conponents/HomePage'));
const CoursePage = lazy(() => import('./conponents/CoursePage'));
const Postlist = lazy(() => import('./conponents/Postlist'));
const Post = lazy(() => import('./conponents/Post'));
const AboutPage = lazy(() => import('./conponents/AboutPage'));
const ScrollToTop = lazy(() => import('./conponents/ScrollToTop'));
const NotFound = lazy(() => import('./conponents/NotFound'));
const Footer = lazy(() => import('./conponents/Footer'));

const FallBack = (props) => {
  const { style } = props

  return (
    <div className='loading-animation' style={{
      ...style,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      background: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      animation: "fadeOut .5s linear",
      zIndex: "9999",
    }}>
      <TailSpin height={60} width={60} stroke='#2869ff' speed={1} />
    </div >
  )
}

function App() {
  const [active, setActive] = useState(false);
  if (active) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }


  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 300)
  }, [])

  return (
    <HelmetProvider>
      <Suspense fallback={<FallBack />}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className='App'>
            <Helmet>
              <meta charSet='utf-8' />
              <title>Web道場 by NITACwpl</title>
            </Helmet>
            {<FallBack style={{ opacity: show ? 0 : 1, visibility: show ? "hidden" : "visible", }} />}
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
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
