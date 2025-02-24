package com.example.tienda.controller;

import com.example.tienda.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.servlet.http.HttpSession;

import java.util.List;
import java.util.Optional;
import com.example.tienda.entity.User;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
       return userService.findAll();
    }

    @PostMapping("/login")
    public String login(String email, String password, HttpSession session) {
        if (userService.authenticate(email, password, session)) {
            session.setAttribute("email",email);
            return "redirect:/inicio";
        }
        return "login";
    }

}
