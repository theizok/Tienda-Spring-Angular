package com.example.tienda.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user_table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String lastname;

    private String email;
    private String password;
}
