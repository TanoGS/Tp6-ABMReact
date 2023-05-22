import React from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import Instrumento from './InstrumentoClass'
import"./CardInstrument.css"
import { Link } from 'react-router-dom'

interface myprops{
    instrumentox: Instrumento[]
}

export default function CardInstrument({ instrumentox }: myprops) {
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Instrumento</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Precio</th>
            <th>Costo Envio</th>
            <th>Cantidad Vendida</th>
            <th>Botones</th>
          </tr>
        </thead>
        <tbody>
          {instrumentox.map((inst, index) => {
    
            return( <tr key={index}>
              <td>{inst.id}</td>
              <td>{inst.instrumento}</td>
              <td>{inst.marca}</td>
              <td>{inst.modelo}</td>
              <td>{inst.precio}</td>
              <td>{inst.cstoEnvio}</td>
              <td>{inst.cantidadVendida}</td>
              <td><Button variant="dark">Update</Button> <Button variant="dark">Delete</Button></td>
            </tr>)
          }
           
        )}
        </tbody>
      </Table>
    </>
  )
}
