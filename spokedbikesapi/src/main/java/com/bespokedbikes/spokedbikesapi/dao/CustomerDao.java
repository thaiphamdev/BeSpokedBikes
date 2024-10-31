package com.bespokedbikes.spokedbikesapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Customer;

@Repository
public interface CustomerDao extends JpaRepository<Customer, Long> {
}
