package com.bespokedbikes.spokedbikesapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Sales;

@Repository
public interface SalesDao extends JpaRepository<Sales, Long> {
}
