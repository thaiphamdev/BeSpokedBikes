package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import com.bespokedbikes.spokedbikesapi.model.Sales;

public interface SalesService {

	List<Sales> findAll();

	Optional<Sales> findById(Long id);

	Sales save(Sales sales);

}
