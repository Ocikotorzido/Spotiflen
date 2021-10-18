import React from 'react'
import spotiflen from '../../img/guitarra.jpg';
import "./tarjeta.css";

const tarjeta = () => {
    return (
        
         
        
        <div class="col-lg-3 mb-4">
          <div class="card ">
            <img src={spotiflen} class="img-fluid" alt="..."/>
            <div class="card-body ">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting 
                                   text below as a natural lead-in to 
                                   additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
    
  
        
    )
}

export default tarjeta
