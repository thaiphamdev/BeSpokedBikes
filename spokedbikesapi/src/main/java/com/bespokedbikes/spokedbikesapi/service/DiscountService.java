package com.bespokedbikes.spokedbikesapi.service;

import java.util.List;
import java.util.Optional;

import com.bespokedbikes.spokedbikesapi.model.Discount;

public interface DiscountService {

	List<Discount> findAll();

	Optional<Discount> findById(Long id);

	Discount save(Discount discount);

}
