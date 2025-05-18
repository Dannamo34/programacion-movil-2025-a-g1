package com.corhuila.rutinas.service;

import com.corhuila.rutinas.entity.EjercicioRutina;
import com.corhuila.rutinas.repository.EjercicioRutinaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EjercicioRutinaService {

    private final EjercicioRutinaRepository repository;

    public EjercicioRutinaService(EjercicioRutinaRepository repository) {
        this.repository = repository;
    }

    public List<EjercicioRutina> findAll() {
        return repository.findAll();
    }

    public Optional<EjercicioRutina> findById(Long id) {
        return repository.findById(id);
    }

    public EjercicioRutina save(EjercicioRutina entity) {
        return repository.save(entity);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}