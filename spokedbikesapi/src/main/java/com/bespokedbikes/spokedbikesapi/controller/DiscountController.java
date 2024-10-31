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

import com.bespokedbikes.spokedbikesapi.model.Discount;
import com.bespokedbikes.spokedbikesapi.service.DiscountService;

@RestController
@RequestMapping("/api/discounts")
public class DiscountController {

    @Autowired
    private DiscountService discountService;

    @GetMapping
    public List<Discount> getAllDiscounts() {
        return discountService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Discount> getDiscountById(@PathVariable Long id) {
        Optional<Discount> discount = discountService.findById(id);
        return discount.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Discount createDiscount(@RequestBody Discount discount) {
        return discountService.save(discount);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Discount> updateDiscount(@PathVariable Long id, @RequestBody Discount discountDetails) {
        Optional<Discount> discount = discountService.findById(id);
        if (discount.isPresent()) {
            Discount updatedDiscount = discount.get();
            updatedDiscount.setProduct(discountDetails.getProduct());
            updatedDiscount.setBeginDate(discountDetails.getBeginDate());
            updatedDiscount.setEndDate(discountDetails.getEndDate());
            updatedDiscount.setDiscountPercentage(discountDetails.getDiscountPercentage());
            return ResponseEntity.ok(discountService.save(updatedDiscount));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
