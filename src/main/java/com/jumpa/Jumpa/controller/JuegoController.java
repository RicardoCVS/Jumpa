package com.jumpa.Jumpa.controller;

import com.jumpa.Jumpa.model.Juego;
import com.jumpa.Jumpa.service.JuegoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/juegos")
public class JuegoController {

    @Autowired
    private JuegoService juegoService;

    @GetMapping("/{id}")
    public ResponseEntity<Juego> getJuegoById(@PathVariable Long id) {
        System.out.println("Petición recibida para juego con ID: " + id);
        Juego juego = juegoService.getJuegoById(id);
        if (juego == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(juego);
    }

    @GetMapping
    public ResponseEntity<String> getJuego() {
        String mensaje = "¡Bienvenido a Jumpa";
        return ResponseEntity.ok(mensaje);
    }
}
