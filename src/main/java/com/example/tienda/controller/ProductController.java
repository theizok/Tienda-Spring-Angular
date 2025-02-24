package com.example.tienda.controller;


import com.example.tienda.entity.Product;
import com.example.tienda.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("{productId}")
    public Optional<Product> getProductById(@PathVariable Long productId) {
        return productService.findById(productId);
    }

    @PostMapping
    public Product addOrUpdateProduct(@RequestBody Product product) {
        return productService.saveOrUpdate(product);
    }

    @DeleteMapping("{productId}")
    public void deleteProduct(@PathVariable Long productId) {
        productService.delete(productId);
    }



}
