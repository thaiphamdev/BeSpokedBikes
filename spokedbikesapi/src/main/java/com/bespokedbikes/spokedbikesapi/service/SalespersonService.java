package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import com.bespokedbikes.spokedbikesapi.model.Salesperson;

public interface SalespersonService {

	public List<Salesperson> findAll();
	public Optional<Salesperson> findById(Long id);
	public Salesperson save(Salesperson salesperson);
}
