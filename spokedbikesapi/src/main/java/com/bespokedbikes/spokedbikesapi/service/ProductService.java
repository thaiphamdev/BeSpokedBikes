package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.model.Product;

@Service
public interface ProductService {

    public List<Product> findAll();

    public Product save(Product product);

    public Product findById(Long id);
}
