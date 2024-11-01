package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.model.Product;

@Service
public interface ProductService {

    public List<Product> findAll();

    public Product save(Product product);

    public Optional<Product> findById(Long id);
}
