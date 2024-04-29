
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/home/Home';

function App() {
  
  return (
    <>
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]' >
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>

    </>
  );
}

export default App;