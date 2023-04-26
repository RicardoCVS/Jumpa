package com.jumpa.Jumpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Random;

@Controller
@RequestMapping("/api/juegos")
public class JuegoController {

    private int targetNumber;
    private int attempts;

    public JuegoController() {
        resetGame();
    }

    @GetMapping
    public String showGamePage() {
        return "game";
    }

    @PostMapping
    public String processGuess(@RequestParam("guess") int guess, Model model) {
        attempts++;

        String message;
        if (guess == targetNumber) {
            message = "¡Correcto! El número era " + targetNumber + ". Lo adivinaste en " + attempts + " intentos.";
            resetGame();
        } else if (guess < targetNumber) {
            message = "¡Incorrecto! Intenta un número más grande.";
        } else {
            message = "¡Incorrecto! Intenta un número más pequeño.";
        }

        model.addAttribute("message", message);
        return "game";
    }

    private void resetGame() {
        targetNumber = new Random().nextInt(100) + 1;
        attempts = 0;
    }
}
