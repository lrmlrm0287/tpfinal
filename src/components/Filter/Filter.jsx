import './filter.css'

export default function Filter({title,filtar}){

    return(
        
     <div id='formularioCheckeo' className='fc form-switch col-2 '>
        <input className='form-check-input' id={title} type='checkbox' onClick={(event)=>filtar(event.target)} value={title}/>
        <label className='form-check-label' htmlFor={title}>{title}</label>
      </div>


)
}