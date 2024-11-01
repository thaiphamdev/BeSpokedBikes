package com.bespokedbikes.spokedbikesapi.model;

public class SalesRequest {
	private Long id;
	private String product_id;
	private String salesperson_id;
	private String customer_id;
	private String sales_date;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProduct_id() {
		return product_id;
	}
	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}
	public String getSalesperson_id() {
		return salesperson_id;
	}
	public void setSalesperson_id(String salesperson_id) {
		this.salesperson_id = salesperson_id;
	}
	public String getSales_date() {
		return sales_date;
	}
	public void setSales_date(String sales_date) {
		this.sales_date = sales_date;
	}
	public String getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(String customer_id) {
		this.customer_id = customer_id;
	}

}
