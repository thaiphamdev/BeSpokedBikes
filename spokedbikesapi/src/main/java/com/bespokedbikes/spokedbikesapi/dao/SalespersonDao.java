package com.bespokedbikes.spokedbikesapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Salesperson;

@Repository
public interface SalespersonDao extends JpaRepository<Salesperson, Long> {
}
