package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.dao.SalespersonDao;
import com.bespokedbikes.spokedbikesapi.model.Salesperson;

@Service
public class SalespersonServiceImpl implements SalespersonService {

    @Autowired
    private SalespersonDao salespersonDao;

    @Override
    public List<Salesperson> findAll() {
        return salespersonDao.findAll();
    }

    @Override
    public Optional<Salesperson> findById(Long id) {
        return salespersonDao.findById(id);
    }

    @Override
    public Salesperson save(Salesperson salesperson) {
        return salespersonDao.save(salesperson);
    }
}
