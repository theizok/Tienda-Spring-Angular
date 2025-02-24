package com.example.tienda.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="table_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idProduct;
    private String productName;
    private String productDescription;
    private double productPrice;
}
