import Navbar from './components/Navbar.jsx' //Importa Navbar
import Home from './views/Home.jsx' //Importa Home
import Contacto from './views/Contacto.jsx' //Importa Contacto
import {BrowserRouter, Routes, Route} from 'react-router-dom' //Importa componentes de React Router
import './App.css'

function App() {

  return (
    <>
          
          <BrowserRouter>
                          
                          <Navbar/>
                          <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="views/Home.jsx" element={<Home/>}></Route>
                                    <Route path="views/Contacto.jsx" element={<Contacto/>}></Route>
                          </Routes>
          
          </BrowserRouter>
          

    </>
  )
}

export default App
