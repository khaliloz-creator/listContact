import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function App() {

  return (


    <>
      <div className="App ">
        <section id="hero" class="d-flex align-items-center">

          <div class="container justify-content-center">
            <div class="row justify-content-center">
              <div class=" d-flex justify-content-center justify-content-center" >
                <h1>Projet Mr.Zied</h1>


              </div>
              <div class=" d-flex justify-content-center justify-content-center" >

                <h2>CRUD FRONTEND REACT Js  </h2>

              </div>
              <div class="d-flex justify-content-center justify-content-center">
                <div class="row">
                  <Link to="/AddContact" className="btn-get-started mr-4 ">Add Contact ↕</Link>

                  <Link to="/ContactList" className="btn-get-started ">Contact List ♣</Link>
                </div>
              </div>

            </div>
          </div>

        </section>

      </div>
      <section id="hero" className="cliens section-bg"></section>




    </>










  );
}

export default App;
