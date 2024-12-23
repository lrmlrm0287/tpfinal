import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home'//de indicar o no la extension (solo si estoy hablando del documento jsx )
import Characters from './pages/Characters/Characters'
import Contact from './pages/Contact/Contact'
import RouterSite from './routes.jsx'
import Navegation from './components/Navegation/Navegation'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  { }
   <RouterSite /> 
 
 </StrictMode>,
)
