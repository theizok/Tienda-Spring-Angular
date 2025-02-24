package com.example.tienda.service;


import com.example.tienda.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import com.example.tienda.repository.ProductRepository;



@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    //Obtener a todos los productos
    public List<Product> findAll() {return productRepository.findAll();}

    //Obtener por id
    public Optional<Product> findById(Long id) {return productRepository.findById(id);}

    //Crear a actualizar
    public Product saveOrUpdate(Product product) {return productRepository.save(product);}

    //Eliminar
    public void delete(Long id) {productRepository.deleteById(id);}

}
