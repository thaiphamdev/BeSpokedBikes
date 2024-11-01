package com.bespokedbikes.spokedbikesapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bespokedbikes.spokedbikesapi.model.Product;
import com.bespokedbikes.spokedbikesapi.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails) {
        Optional<Product> product = productService.findById(id);
        if (product.isPresent()) {
        	Product updatedProduct = product.get();
        	updatedProduct.setName(productDetails.getName());
        	updatedProduct.setManufacturer(productDetails.getManufacturer());
        	updatedProduct.setStyle(productDetails.getStyle());
        	updatedProduct.setPurchasePrice(productDetails.getPurchasePrice());
        	updatedProduct.setSalePrice(productDetails.getSalePrice());
        	updatedProduct.setQtyOnHand(productDetails.getQtyOnHand());
        	updatedProduct.setCommissionPercentage(productDetails.getCommissionPercentage());
            return ResponseEntity.ok(productService.save(updatedProduct));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}