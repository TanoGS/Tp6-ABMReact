import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Instrumento from './InstrumentoClass';
import "./InstrumentoIndividual.css"

let costo
// export const instrumentox: Instrumento[] = instrumentosJson.instrumentos

export default function InstrumentoIndividual() {

  const {id} = useParams ();
  const [instrumento, setInstrumento] = useState<Instrumento> ();


// Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "http://localhost:8080/instrumentos/"+ id
  ).then((response) => response.json());

  // update the state
  setInstrumento(response);
};

useEffect(() => {
  getApiData();
}, []);

if (instrumento?.cstoEnvio  == "G") {
  costo = "Envio Gratis"
}else{
  costo = instrumento?.costoEnvio
}
console.log(instrumento)

  return (
    <div>
<div>
  
<div className='contenedor'>
      
      <table>
        <tr>
          <td>
            <img className='imagen' src={"/img/" + instrumento?.imagen} alt="" />
            <p>Descipcion: </p>
            <p className='descripcion'>{instrumento?.descripcion}</p>
          </td>
          <td>
          <p className='instrumento'>{instrumento?.instrumento}</p>
            <p className='marca'>Marca: {instrumento?.marca}</p>
            <p className='modelo'>Modelo: {instrumento?.modelo}</p>
            
            <p className='precio'>Precio: {instrumento?.precio}</p>  
            <p>{costo}</p>
            <p className='boton'>
            <Link className='agregar' to={""}>Agregar al Carrito</Link>
            </p>
           
          </td>
        </tr>
      </table>
     

    </div>

    <p></p>
</div>
    </div>
  )
}
