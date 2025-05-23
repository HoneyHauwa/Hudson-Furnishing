import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  

  return (
    <>
      <div className='App'>
        <Router>
          <Navbar/>

          <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/menu' element={<Menu /> } />
          <Route path='/about' element={<About /> } />
          <Route path='/contact' element={<Contact /> } />
          </Routes>

          <Footer/>

        </Router>
      

      </div>
      
    </>
  );
}

export default App
