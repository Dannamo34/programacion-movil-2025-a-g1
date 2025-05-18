package com.corhuila.rutinas.controller;

import com.corhuila.rutinas.entity.Progreso;
import com.corhuila.rutinas.service.ProgresoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/progreso")
@CrossOrigin(origins = "*")
public class ProgresoController {

    private final ProgresoService service;

    public ProgresoController(ProgresoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Progreso> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Progreso> getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Progreso save(@RequestBody Progreso progreso) {
        return service.save(progreso);
    }

    @PutMapping("/{id}")
    public Progreso update(@PathVariable Long id, @RequestBody Progreso progreso) {
        progreso.setId(id);
        return service.save(progreso);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}