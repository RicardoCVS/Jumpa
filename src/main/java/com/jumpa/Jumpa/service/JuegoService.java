package com.jumpa.Jumpa.service;

import com.jumpa.Jumpa.model.Juego;
import com.jumpa.Jumpa.repository.JuegoRepository;
import org.springframework.stereotype.Service;

@Service
public class JuegoService {

    private JuegoRepository juegoRepository;

    public JuegoService(JuegoRepository juegoRepository) {
        this.juegoRepository = juegoRepository;
    }

    public Juego getJuegoById(Long id) {
        return juegoRepository.findById(id).orElse(null);
    }
}
