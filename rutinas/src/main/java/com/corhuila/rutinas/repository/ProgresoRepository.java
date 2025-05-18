package com.corhuila.rutinas.repository;

import com.corhuila.rutinas.entity.Progreso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProgresoRepository extends JpaRepository<Progreso, Long> {
}