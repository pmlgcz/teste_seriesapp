import { useEffect } from 'react';
import { useState } from 'react';
import API from '../../axios/config'
import PLAYIMG from "../../images/play.png"
import "./catalogo.css"
export default function Catalogo() {

  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    API.get("/catalogo").then((response) => setCatalogo(response.data));
  }, []);

  return (
    <>
      <br></br><div id="Catalogo">
        <h2> <img src={PLAYIMG}/>Series mais assistidas</h2><br></br>
      </div>
      <ul className='lista-catalogo'>
        <li>
          {catalogo.map(function locais(item) {
            return <div>
                    <p>Catalogo {item.id}</p>


                  </div>;
          })}
        </li>
        
      </ul>
      
    </>
  );
}
