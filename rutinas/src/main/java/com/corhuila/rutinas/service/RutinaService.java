package com.corhuila.rutinas.service;

import com.corhuila.rutinas.entity.Rutina;
import com.corhuila.rutinas.repository.RutinaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RutinaService {

    private final RutinaRepository rutinaRepository;

    public RutinaService(RutinaRepository rutinaRepository) {
        this.rutinaRepository = rutinaRepository;
    }

    public List<Rutina> findAll() {
        return rutinaRepository.findAll();
    }

    public Optional<Rutina> findById(Long id) {
        return rutinaRepository.findById(id);
    }

    public Rutina save(Rutina rutina) {
        return rutinaRepository.save(rutina);
    }

    public void delete(Long id) {
        rutinaRepository.deleteById(id);
    }
}