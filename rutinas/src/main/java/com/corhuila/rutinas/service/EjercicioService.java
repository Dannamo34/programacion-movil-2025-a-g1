package com.corhuila.rutinas.service;


import com.corhuila.rutinas.entity.Ejercicio;
import com.corhuila.rutinas.repository.EjercicioRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EjercicioService {

    private final EjercicioRepository ejercicioRepository;

    public EjercicioService(EjercicioRepository ejercicioRepository) {
        this.ejercicioRepository = ejercicioRepository;
    }

    public List<Ejercicio> findAll() {
        return ejercicioRepository.findAll();
    }

    public Optional<Ejercicio> findById(Long id) {
        return ejercicioRepository.findById(id);
    }

    public Ejercicio save(Ejercicio ejercicio) {
        return ejercicioRepository.save(ejercicio);
    }

    public void delete(Long id) {
        ejercicioRepository.deleteById(id);
    }
}