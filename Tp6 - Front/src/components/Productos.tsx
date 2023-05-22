import  CardInstrument  from "./CardInstrument"
import Instrumento from "./InstrumentoClass"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


// export const instrumentox: Instrumento[] = instrumentosJson.instrumentos



export const Productos = () => {

  // Store list of all users
const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

// Function to collect data
const getApiData = async () => {
  const response = await fetch(
    "http://localhost:8080/instrumentos"
  ).then((response) => response.json());

  // update the state
  setInstrumentos(response);
};
console.log(instrumentos)
useEffect(() => {
  getApiData();
}, []);


  return (
    <>
      
      <h1 className="mb-5">Listado de Instrumentos</h1>
        <CardInstrument instrumentox={instrumentos} />

        
   
      
    </>
  )
}