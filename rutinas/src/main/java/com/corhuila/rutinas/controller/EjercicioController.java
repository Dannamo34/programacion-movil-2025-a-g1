package com.corhuila.rutinas.controller;


import com.corhuila.rutinas.entity.Ejercicio;
import com.corhuila.rutinas.service.EjercicioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ejercicio")
@CrossOrigin(origins = "*")
public class EjercicioController {

    private final EjercicioService service;

    public EjercicioController(EjercicioService service) {
        this.service = service;
    }

    @GetMapping
    public List<Ejercicio> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Ejercicio> getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Ejercicio save(@RequestBody Ejercicio ejercicio) {
        return service.save(ejercicio);
    }

    @PutMapping("/{id}")
    public Ejercicio update(@PathVariable Long id, @RequestBody Ejercicio ejercicio) {
        ejercicio.setId(id);
        return service.save(ejercicio);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}