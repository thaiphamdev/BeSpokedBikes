package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.bespokedbikes.spokedbikesapi.model.Sales;

public interface SalesService {

	List<Sales> findAll();

	Optional<Sales> findById(Long id);

	Sales save(Sales sales);

	Map<Integer, Map<String, Map<String, Double>>> getSalesReport();

}
