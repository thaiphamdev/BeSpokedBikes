package com.bespokedbikes.spokedbikesapi.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bespokedbikes.spokedbikesapi.model.Sales;

@Repository
public interface SalesByRangeDao extends JpaRepository<Sales, Long> {
	List<Sales> findByDateBetween(LocalDate to,LocalDate from);
}
