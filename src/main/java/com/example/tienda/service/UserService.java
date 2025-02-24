package com.example.tienda.service;

import com.example.tienda.entity.User;
import com.example.tienda.repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User>findAll(){
        return userRepository.findAll();
    }
    public Optional<User> findById(Long id){
        return userRepository.findById(id);
    }
    public User saveOrUpdate(User user){
        return userRepository.save(user);
    }
    public void deleteById(Long id){
        userRepository.deleteById(id);
    }

    public boolean authenticate(String email, String password, HttpSession session){
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)){
            return true;
        }
        return false;
    }
}
