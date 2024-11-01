package com.bespokedbikes.spokedbikesapi.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
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

import com.bespokedbikes.spokedbikesapi.model.Customer;
import com.bespokedbikes.spokedbikesapi.model.Product;
import com.bespokedbikes.spokedbikesapi.model.Sales;
import com.bespokedbikes.spokedbikesapi.model.SalesRequest;
import com.bespokedbikes.spokedbikesapi.model.Salesperson;
import com.bespokedbikes.spokedbikesapi.service.SalesService;

@RestController
@RequestMapping("/api/sales")
public class SalesController {

    @Autowired
    private SalesService salesService;

    @GetMapping
    public List<Sales> getAllSales() {
        return salesService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sales> getSalesById(@PathVariable Long id) {
        Optional<Sales> sales = salesService.findById(id);
        return sales.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }
    
    @GetMapping("/report")
    public Map<Integer, Map<String, Map<String, Double>>> getSalesReport() {
        return salesService.getSalesReport();
    }

    @PostMapping
    public Sales createSales(@RequestBody SalesRequest salesReq) {
    	Sales sales = new Sales();
    	Product product = new Product();
    	product.setId(Long.parseLong(salesReq.getProduct_id()));
    	sales.setProduct(product);
    	Customer customer = new Customer();
    	customer.setId(Long.parseLong(salesReq.getCustomer_id()));
    	sales.setCustomer(customer);
    	Salesperson salesperson = new Salesperson();
    	salesperson.setId(Long.parseLong(salesReq.getSalesperson_id()));
    	sales.setSalesperson(salesperson);
    	LocalDate currentDate = LocalDate.now();
    	sales.setSalesDate(currentDate);
        return salesService.save(sales);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sales> updateSales(@PathVariable Long id, @RequestBody Sales salesDetails) {
        Optional<Sales> sales = salesService.findById(id);
        if (sales.isPresent()) {
            Sales updatedSales = sales.get();
            updatedSales.setProduct(salesDetails.getProduct());
            updatedSales.setSalesperson(salesDetails.getSalesperson());
            updatedSales.setCustomer(salesDetails.getCustomer());
            updatedSales.setSalesDate(salesDetails.getSalesDate());
            return ResponseEntity.ok(salesService.save(updatedSales));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
