import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listatemas/ListaTemas';

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <main className="min-h-[80vh]">
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/cadastro' element={<Cadastro />} />
              <Route path='/login' element={<Login />} />
              <Route path='/tema' element={<ListaTemas />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;
