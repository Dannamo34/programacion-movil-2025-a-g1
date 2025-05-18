package com.corhuila.rutinas.repository;


import com.corhuila.rutinas.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
