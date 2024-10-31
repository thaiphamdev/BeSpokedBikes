package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.dao.DiscountDao;
import com.bespokedbikes.spokedbikesapi.model.Discount;

@Service
public class DiscountServiceImpl implements DiscountService {

    @Autowired
    private DiscountDao discountDao;

    @Override
    public List<Discount> findAll() {
        return discountDao.findAll();
    }

    @Override
    public Optional<Discount> findById(Long id) {
        return discountDao.findById(id);
    }
    
    @Override
    public Discount save(Discount discount) {
        return discountDao.save(discount);
    }
}
