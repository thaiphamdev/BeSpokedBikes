package com.bespokedbikes.spokedbikesapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bespokedbikes.spokedbikesapi.model.Salesperson;
import com.bespokedbikes.spokedbikesapi.service.SalespersonService;

@RestController
@RequestMapping("/api/salespersons")
public class SalespersonController {

    @Autowired
    private SalespersonService salespersonService;

    @GetMapping
    public List<Salesperson> getAllSalespersons() {
        return salespersonService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Salesperson> getSalespersonById(@PathVariable Long id) {
        Optional<Salesperson> salesperson = salespersonService.findById(id);
        return salesperson.map(ResponseEntity::ok)
                          .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Salesperson createSalesperson(@RequestBody Salesperson salesperson) {
        return salespersonService.save(salesperson);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Salesperson> updateSalesperson(@PathVariable Long id, @RequestBody Salesperson salespersonDetails) {
        Optional<Salesperson> salesperson = salespersonService.findById(id);
        if (salesperson.isPresent()) {
            Salesperson updatedSalesperson = salesperson.get();
            updatedSalesperson.setFirstName(salespersonDetails.getFirstName());
            updatedSalesperson.setLastName(salespersonDetails.getLastName());
            updatedSalesperson.setAddress(salespersonDetails.getAddress());
            updatedSalesperson.setPhone(salespersonDetails.getPhone());
            updatedSalesperson.setStartDate(salespersonDetails.getStartDate());
            updatedSalesperson.setTerminationDate(salespersonDetails.getTerminationDate());
            updatedSalesperson.setManager(salespersonDetails.getManager());
            return ResponseEntity.ok(salespersonService.save(updatedSalesperson));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
