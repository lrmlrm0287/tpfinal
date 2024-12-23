import './nav.css'
import {Link} from 'react-router'


export default function Navegation() {
    return(
      <div id="root">
        <nav className='container-open nav navbar navbar-expand-lg d-flex justify-content-between p-5 w-100'>
          <div className="container-fluid d-flex justify-content-between aling-items-center">
            <a className=" text-decoration-none" href="/">
              <h1><Link to="/" className="h1RyM t-rm navbar-brand cursor-p data-discover=true">Rick & Morty</Link></h1>   
            </a>        
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">  
              <img src="./src/components/Navegation/list.svg" alt="Menu" class="iconoNav me-2" width="24" height="24"></img>
            </button>
            <div className="navbar-collapse justify-content-end collapse show" id="navbarSupportedContent">
              <ul className="container-items nav nav-pills">             
                  <li className="nav-item"> 
                    <a> <Link to="/Characters" className="bc-1 nav-link text-decoration-none bc-hover" href="/Characters">Characters</Link></a>
                  </li>
                  <li className="nav-item">
                    <a> <Link to="/Contact" className="bc-2 nav-link text-decoration-none bc-hover" href="/Contact">Contact</Link></a>
                  </li>           
              </ul>
            </div>
          </div>      
        </nav>    
     
      </div>      
  )
}
