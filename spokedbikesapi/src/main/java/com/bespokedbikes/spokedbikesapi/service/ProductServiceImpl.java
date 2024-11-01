package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.dao.ProductDao;
import com.bespokedbikes.spokedbikesapi.model.Product;

@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
    private ProductDao productDao;

	@Override
    public List<Product> findAll() {
        return productDao.findAll();
    }

    @Override
    public Product save(Product product) {
        return productDao.save(product);
    }

	@Override
	public Optional<Product> findById(Long id) {
		return productDao.findById(id);
	}
}
