import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Cadastro from './pages/cadastar/Cadastro';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <main className="min-h-[80vh]">
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Cadastro />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>

  );
}

export default App;
