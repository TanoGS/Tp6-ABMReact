package com.example.tpclienteservidor.Controler;

import com.example.tpclienteservidor.Model.Instrumento;
import com.example.tpclienteservidor.Repository.InstrumentoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/instrumentos")
@CrossOrigin(origins = "*")
public class IntrumentoControler {

    @Autowired
    private InstrumentoRepositorio repositorio;

    @GetMapping("")
    public List<Instrumento> findAll(){
       return repositorio.findAll();
    }
    @GetMapping("/{id}")
    public Instrumento findId(@PathVariable Long id){
        Optional<Instrumento> optional =  repositorio.findById(id);
        if (optional.isPresent()){
            return optional.get();
        } return null;
    }

}
