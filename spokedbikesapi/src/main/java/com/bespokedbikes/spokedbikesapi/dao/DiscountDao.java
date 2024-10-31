package com.bespokedbikes.spokedbikesapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Discount;

@Repository
public interface DiscountDao extends JpaRepository<Discount, Long> {
}
