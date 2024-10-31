package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.dao.SalesDao;
import com.bespokedbikes.spokedbikesapi.model.Sales;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    private SalesDao salesDao;

    @Override
    public List<Sales> findAll() {
        return salesDao.findAll();
    }

    @Override
    public Optional<Sales> findById(Long id) {
        return salesDao.findById(id);
    }

    @Override
    public Sales save(Sales sales) {
        return salesDao.save(sales);
    }
}
