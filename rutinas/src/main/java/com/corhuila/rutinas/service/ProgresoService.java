package com.corhuila.rutinas.service;

import com.corhuila.rutinas.entity.Progreso;
import com.corhuila.rutinas.repository.ProgresoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProgresoService {

    private final ProgresoRepository repository;

    public ProgresoService(ProgresoRepository repository) {
        this.repository = repository;
    }

    public List<Progreso> findAll() {
        return repository.findAll();
    }

    public Optional<Progreso> findById(Long id) {
        return repository.findById(id);
    }

    public Progreso save(Progreso progreso) {
        return repository.save(progreso);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}