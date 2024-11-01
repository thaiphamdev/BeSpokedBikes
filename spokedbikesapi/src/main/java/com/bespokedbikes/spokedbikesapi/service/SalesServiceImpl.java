package com.bespokedbikes.spokedbikesapi.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bespokedbikes.spokedbikesapi.dao.SalesDao;
import com.bespokedbikes.spokedbikesapi.model.Product;
import com.bespokedbikes.spokedbikesapi.model.Sales;
import com.bespokedbikes.spokedbikesapi.model.Salesperson;

@Service
public class SalesServiceImpl implements SalesService {

    @Autowired
    private SalesDao salesDao;

    @Override
    public List<Sales> findAll() {
        return salesDao.findAll();
    }
    
    @Override
    public Map<Integer, Map<String, Map<String, Double>>> getSalesReport() {
    	List<Sales> salesList = salesDao.findAll();
    	
    	Map<Integer, Map<String, Map<String, Double>>> groupedByYearAndQuarterThenName = salesList.stream()
    			.collect(Collectors.groupingBy(sales ->sales.getSalesDate().getYear(),
    					Collectors.groupingBy(sales -> getQuarter(sales.getSalesDate()),
    							Collectors.groupingBy(sales -> getNames(sales.getSalesperson()),
    									Collectors.summingDouble(sales -> calculateCommission(sales.getProduct()))))));
        return groupedByYearAndQuarterThenName;
    }


    @Override
    public Optional<Sales> findById(Long id) {
        return salesDao.findById(id);
    }

    @Override
    public Sales save(Sales sales) {
        return salesDao.save(sales);
    }
    
    private static String getQuarter(LocalDate date) {
        int month = date.getMonthValue();
        if (month >= 1 && month <= 3) {
            return "Quarter 1";
        } else if (month >= 4 && month <= 6) {
            return "Quarter 2";
        } else if (month >= 7 && month <= 9) {
            return "Quarter 3";
        } else {
            return "Quarter 4";
        }
    }
    
    private static String getNames(Salesperson salesperson) {
        return salesperson.getFirstName().concat(" ").concat(salesperson.getLastName());
    }
    
    private static Double calculateCommission(Product product) {
        return product.getCommissionPercentage()*product.getSalePrice()/100;
    }
}
