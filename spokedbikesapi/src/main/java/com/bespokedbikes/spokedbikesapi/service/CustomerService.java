package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;

import com.bespokedbikes.spokedbikesapi.model.Customer;

public interface CustomerService {

	List<Customer> findAll();
	
}
