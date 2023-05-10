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
@RequestMapping("/api")
public class JuegoController {

    @GetMapping("/juegos")
    public ResponseEntity<Resource> showGamePage() {
        Resource resource = new ClassPathResource("static/game.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }

    @GetMapping("/juegos1")
    public ResponseEntity<Resource> showGamePage1() {
        Resource resource = new ClassPathResource("static/game1.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }

    @GetMapping("/juegos2")
    public ResponseEntity<Resource> showGamePage2() {
        Resource resource = new ClassPathResource("static/game2.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }

    @GetMapping("/juegos3")
    public ResponseEntity<Resource> showGamePage3() {
        Resource resource = new ClassPathResource("static/game3.html");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_HTML);
        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
}





