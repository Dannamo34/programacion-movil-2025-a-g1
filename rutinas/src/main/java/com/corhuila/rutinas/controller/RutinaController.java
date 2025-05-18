package com.corhuila.rutinas.controller;

import com.corhuila.rutinas.entity.Rutina;
import com.corhuila.rutinas.service.RutinaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rutina")
@CrossOrigin(origins = "*")
public class RutinaController {

    private final RutinaService service;

    public RutinaController(RutinaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Rutina> getAll() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Rutina> getById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public Rutina save(@RequestBody Rutina rutina) {
        return service.save(rutina);
    }

    @PutMapping("/{id}")
    public Rutina update(@PathVariable Long id, @RequestBody Rutina rutina) {
        rutina.setId(id);
        return service.save(rutina);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
