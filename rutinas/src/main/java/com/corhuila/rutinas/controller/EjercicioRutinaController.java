package com.corhuila.rutinas.controller;

import com.corhuila.rutinas.entity.EjercicioRutina;
import com.corhuila.rutinas.service.EjercicioRutinaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ejercicio-rutina")
@CrossOrigin(origins = "*")
public class EjercicioRutinaController {

    private final EjercicioRutinaService service;

    public EjercicioRutinaController(EjercicioRutinaService service) {
        this.service = service;
    }

    @GetMapping
    public List<EjercicioRutina> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<EjercicioRutina> getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public EjercicioRutina save(@RequestBody EjercicioRutina entity) {
        return service.save(entity);
    }

    @PutMapping("/{id}")
    public EjercicioRutina update(@PathVariable Long id, @RequestBody EjercicioRutina entity) {
        entity.setId(id);
        return service.save(entity);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}