package com.jumpa.Jumpa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class JumpaApplication {

	public static void main(String[] args) {
		SpringApplication.run(JumpaApplication.class, args);
	}
}

@Controller
class HomeController {

	@GetMapping("/")
	public String homePage(Model model) {
		model.addAttribute("name", "Dani");
		return "hello";
	}

}
