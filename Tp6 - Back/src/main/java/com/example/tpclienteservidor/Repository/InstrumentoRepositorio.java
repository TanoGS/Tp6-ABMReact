package com.example.tpclienteservidor.Repository;

import com.example.tpclienteservidor.Model.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InstrumentoRepositorio extends JpaRepository<Instrumento, Long> {
    // encontrar todos los instrumentos
    List<Instrumento> findAll();

}