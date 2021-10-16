import React from 'react'
import spotiflen from '../../img/spitiflen.jpg';
import "./tarjeta.css";

const tarjeta = () => {
    return (
        
         
        <div class="row ">
        <div class="col-3">
          <div class="card">
            <img src={spotiflen} class="" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        
      </div>
  
        
    )
}

export default tarjeta
