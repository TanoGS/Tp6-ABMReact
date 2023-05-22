package com.example.tpclienteservidor.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Instrumento implements Serializable {
    @Id
    Long id;
    String instrumento;
    String marca;
    String modelo;
    String imagen;
    Long precio;
    Long costoEnvio;
    Long cantidadVendida;
    String descripcion;
}
