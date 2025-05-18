package com.corhuila.rutinas.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Progreso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate fecha;
    private String ejercicio;
    private int seriesRealizadas;
    private int repeticionesRealizadas;
    private double pesoUtilizado;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    // Getters y setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getEjercicio() {
        return ejercicio;
    }

    public void setEjercicio(String ejercicio) {
        this.ejercicio = ejercicio;
    }

    public int getSeriesRealizadas() {
        return seriesRealizadas;
    }

    public void setSeriesRealizadas(int seriesRealizadas) {
        this.seriesRealizadas = seriesRealizadas;
    }

    public int getRepeticionesRealizadas() {
        return repeticionesRealizadas;
    }

    public void setRepeticionesRealizadas(int repeticionesRealizadas) {
        this.repeticionesRealizadas = repeticionesRealizadas;
    }

    public double getPesoUtilizado() {
        return pesoUtilizado;
    }

    public void setPesoUtilizado(double pesoUtilizado) {
        this.pesoUtilizado = pesoUtilizado;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}