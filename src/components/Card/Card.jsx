import { useState } from "react"
import './card.css'

export default function Card({personaje}) {
    let [ocultar,setOcultar]=useState(true)
   


    return(
      
      <div className="cardcard card d-flex fit-content flex-row gap-2 border-dark p-2 rounded expandable-content justify-content-between align-items-start"> <div>
      <div className="d-flex row flex-column justify-content-center aling-items-center">
           <img src={personaje.image} className="i-card card-img-top"/>
           <h2 className="pername text-center">{personaje.name}</h2>
           <div className="d-flex flex-column justify-content-end align-items-end" >
             <button onClick={()=>setOcultar(false  )} className={ocultar?"btnm d-block b-card btn-x-md d-flex align-self-end":"d-none"}>Know More</button>                       
            </div>           
        </div>
      </div>

      {ocultar ?'':
         <div className="contenedor-info rounded-2 d-flex flex-row justify-content-between align-items-center">
           <div className="d-flex flex-column align-items-center">
             <div className="d-flex justify-content-end">
               <button className="bl rounded-2 border-0 m-2 justify-content-end justify-content-end" onClick={()=>setOcultar(true)}>X</button>
             </div>
             <ul className="list">
               <li className="containeritem p-3 d-flex flex-column border-0">
                 <p className="pd m-0 fw-bold">Character Status {personaje.status}</p>
               </li>
               <li className="containeritem p-3 d-flex flex-column border-0">
                 <h4 className="h4d m-0">Species</h4>
                 <p className="pd fw-bold m-0">{personaje.species}</p>
               </li>
               <li className="containeritem p-3 d-flex flex-column border-0">
                 <h4 className="h4d m-0">Origin</h4>
                 <p className="pd fw-bold m-0">{personaje.origin.name}</p>
               </li>
               <li className="containeritem p-3 d-flex flex-column border-0">
                 <h4 className="h4d m-0">Gender</h4>
                 <p className="pd fw-bold m-0">{personaje.gender} </p>
               </li>
             </ul>
           </div>                         
         </div>
      }

        </div>
)
}

