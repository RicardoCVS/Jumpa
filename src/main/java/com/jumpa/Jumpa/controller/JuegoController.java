package com.jumpa.Jumpa.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/api/juegos")
public class JuegoController {

    @GetMapping
<<<<<<< HEAD
    public ResponseEntity<String> getJuego() {
        String mensaje = "¡Bienvenido a Jumpa";
        return ResponseEntity.ok(mensaje);
=======
    public ResponseEntity<Resource> showGamePage() {
        Resource resource = new ClassPathResource("static/game.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
>>>>>>> 164d7e579a15637969880487686aa434dc4ec7f4
    }
}


