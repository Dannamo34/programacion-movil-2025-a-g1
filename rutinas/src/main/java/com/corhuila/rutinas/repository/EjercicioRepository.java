package com.corhuila.rutinas.repository;

import com.corhuila.rutinas.entity.Ejercicio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EjercicioRepository extends JpaRepository<Ejercicio, Long> {
}
