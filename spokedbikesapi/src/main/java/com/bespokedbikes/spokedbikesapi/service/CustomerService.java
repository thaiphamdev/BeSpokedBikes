package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import com.bespokedbikes.spokedbikesapi.model.Customer;

public interface CustomerService {

	List<Customer> findAll();

	Optional<Customer> findById(Long id);

	Customer save(Customer customer);

}
