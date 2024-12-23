import { useState ,useEffect,useContext} from 'react';

import './character.css'

import Navegation from '../../components/Navegation/Navegation'
import Card from '../../components/Card/Card'
import Filter from '../../components/Filter/Filter'


export default function Characters() {
    let [data,setData]=useState([])
    let[dataCompleta,setDataCompleta]=useState([])
    let [filtrosAplicados,setFiltrosAplicados]=useState([])
    let[show,setShow]=useState(true)
    

    let filterName=["Character Alive","Character Dead","Female","Male","Origin Unknown"]

    const mostrarData=async()=>{
       let infoAPI= await fetch("https://rickandmortyapi.com/api/character")
         .then((resp)=>{return resp.json()})
         .catch((error)=>console.log("error:" +error));
     
         setDataCompleta(infoAPI.results);
         setData(infoAPI.results)
     
     }

    const filtrar=(inputData)=>{

        
        let pulsado=inputData.checked;

        let filtroPulsado=inputData.value;
        console.log(pulsado)
        console.log(filtroPulsado)

       
        if(pulsado){
            setFiltrosAplicados([...filtrosAplicados,filtroPulsado])
           
        }else{
            setData(dataCompleta)
            let filtrosActualizado=filtrosAplicados.filter((fil)=>{return fil !== filtroPulsado})
            setFiltrosAplicados(filtrosActualizado)
        }
    
    }

    useEffect(()=>{
        
       filtrosAplicados.forEach((filtro)=>{
        let nuevaLista;

        switch (filtro) {
            case "Character Alive":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Alive"})
                break;

            case "Character Dead":
                nuevaLista=data.filter((personaje)=>{return personaje.status === "Dead" })
                break;

            case "Female":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Female"})
                break;

            case "Male":
                nuevaLista=data.filter((personaje)=>{return personaje.gender ===  "Male" })
                break;

            case "Origin Unknown":
                nuevaLista=data.filter((personaje)=>{return personaje.origin.name === "unknown" })
                break;
                              
        }
       setData(nuevaLista) 
       })
    },[filtrosAplicados])  
  
    
     useEffect(()=>{
        mostrarData()
        
     },[])
    



    return(
        <div>
            <Navegation/>
          
            <h2 className='subt-1'>Filters</h2>
            
            <div className='mobile-filters d-flex mx-auto gap-3 my-4 p-4 justify-content-between flex-wrap align-items-center w-75 rounded-3' onClick={()=>{setShow(!show)}}>
                <h2 className='h2Filter'>Filters</h2>   

                <button class="btn d-flex align-items-center">
                  <img src="./src/components/Navegation/filter-icon.svg" alt="Botón" class="me-2" width="24" height="24"></img>
                </button>
            </div>

            <form className={show? 'form row gap-2 p-4 gap-3 mx-auto':'row flex-column gap-2 p-3  align-items-center'}>
               {
                 filterName.map((filter)=>{
                 return  <Filter key={filter} title={filter} filtar={filtrar}/>
                 })
               }  
             </form>          
     
            <section className='d-flex gap-2 flex-wrap justify-content-center'>
            {
               
                data.length !== 0?
                data.map((personaje)=>{
                    return <Card key={personaje.id} personaje={personaje}/>
                })
                :
                <p className='alert pAlerta'>
                <i className="bi bi-exclamation-triangle-fill pe-2"></i>Sorry! There are no characters width all those properties.</p>
            }
                
            </section>      
        </div>

    )
}

