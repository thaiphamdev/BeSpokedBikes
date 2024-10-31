package com.bespokedbikes.spokedbikesapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Long> {

}
