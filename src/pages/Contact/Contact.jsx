import Navegation from '../../components/Navegation/Navegation'
import './contact.css'

export default function Contact() {
    return(
<div>
  <Navegation/>
  
  <main className="d-flex justify-content-center">
    <div className="contbox d-flex flex-column justify-content-center aling-items-center">
        <div>
          <h2 className="ta text-center">Contact</h2>
          <h3 className="tb text-center">Leave us your information so we can contact you</h3>
        </div>
        <form className="container-form justify-content-md-center p-4" action="https://formspree.io/f/mwpppvkv" method="POST"> 
        {/* LINKEO CON LA API FORMSPREE PARA QUE ME LLEGUE EL CONTACTO POR MAIL Y ASI SUMAR EL PROYECTO AL PORFOLIO */}
        <div className="nombreymail d-flex flex-row justify-content-md-center justify-content-between align-items-center mt-5 ">
            <div className="da d-flex flex-column">
              <label className="label-form" for="name">Name</label>
              <input className="input-text rounded-2 p-2 border border-0" type="text" name="userName" id="name" required=""></input>
            </div>
            <div className="db d-flex flex-column">
              <label className="label-form" for="email">Email</label>
              <input className="input-text rounded-2 p-2 border border-0" type="email" name="userEmail" id="email" required=""></input>
            </div>
          </div>  
          <div className="dc d-flex flex-column">
            <label className="label-form" for="messege">Messege</label>
            <textarea className="textarea rounded-2 border border-0 p-4" name="userMessege" id="messege" cols="30" rows="10" required=""> </textarea>
          </div>
          <div className="de">
            <input className="btn-form rounded-2 border border-0" type="submit" value="Send"></input>
          </div>
        </form>
    </div>
  </main>

</div>      
    )
}