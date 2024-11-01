import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import './sales.css';
import '../../common.css'
import { priceFormat } from '../../utils';

const SalesPage = (props) => {
    const { createSales, sales, getSales, getProducts, getCustomers, getSalesPersons } = props;
    const { products, salesPersons, customers } = useSelector(state => state);
    const [isNewSale, setIsNewSale] = useState(false);
    const [isInValidData, setIsInValidData] = useState(false);
    const [formData, setFormData] = useState({ product_id: '', salesperson_id: '', customer_id: '' });

    useEffect(() => {
        getSales();
    }, []);

    useEffect(() => {
        if (isNewSale) {
            if (!products?.respone || products?.respone.length === 0) {
                getProducts();
            }
            if (!customers?.respone || customers?.respone.length === 0) {
                getCustomers();
            }
            if (!salesPersons?.respone || salesPersons?.respone.length === 0) {
                getSalesPersons();
            }
        }
    }, [isNewSale]);

    useEffect(() => {
        if (sales?.createRespone?.id) {
            getSales();
        }
    }, [sales?.createRespone]);

    const isLoading = sales?.isLoading || products?.isLoading || customers?.isLoading || salesPersons?.isLoading;

    const calculateCommission = (product) => {
        if (!product.salePrice || !product.commissionPercentage) {
            return 0;
        } else {
            const price = product.salePrice;
            const commission = product.commissionPercentage / 100;
            return price * commission;
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isInValidData) {
            setIsInValidData(false);
        }
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formData.product_id === '' || formData.customer_id === '' || formData.salesperson_id === '') {
            setIsInValidData(true);
        } else {
            createSales(formData); // Call the create action
            setIsNewSale(false)
        }
    };

    const renderRow = (sale) => {

        return (
            <tr key={sale.id}>
                <td>{`${sale.product?.name}-${sale.product?.manufacturer}-${sale.product?.style}`}</td>
                <td>{`${sale.customer?.firstName} ${sale.customer?.lastName}`}</td>
                <td>{sale.salesDate}</td>
                <td>{`$ ${priceFormat(sale.product?.salePrice)}`}</td>
                <td>{`${sale.salesperson?.firstName} ${sale.salesperson?.lastName}`}</td>
                <td>{`$ ${priceFormat(calculateCommission(sale.product))}`}</td>
            </tr>
        )
    }
    return (
        <div className="PageContainer">
            <div className="Heading">
                <h1>Sales Page</h1>
                <h4 onClick={() => setIsNewSale(!isNewSale)}>Create A New Sale</h4>
            </div>
            {isLoading && <div>Loading...</div>}
            {!isNewSale &&
                <main>
                    {sales?.isError && <div>Oops... Something went wrong...</div>}
                    {!sales?.isLoading && !sales?.isError && sales?.respone && (
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>Salesperson</th>
                                    <th>Commission</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.respone.map((sale) => (
                                    renderRow(sale)
                                ))}
                            </tbody>
                        </table>
                    )}
                </main>
            }
            {isNewSale && products?.respone && customers?.respone && salesPersons?.respone && (
                <div className="newSalesFormContainer">
                    <div >
                        <div className="selectRow">
                            <label>
                                Select a product:
                                <select name="product_id" onChange={handleInputChange} className="marginLeft10">
                                    <option value={''}>Select an option</option>
                                    {products.respone.map(product =>
                                        <option value={product.id}>{`${product.name} - ${product.manufacturer} - ${product.style} - $ ${priceFormat(product.salePrice)}`}</option>
                                    )};
                                </select>
                            </label>
                        </div>
                        <div className="selectRow">
                            <label>
                                Select a sale person:
                                <select name="salesperson_id" onChange={handleInputChange} className="marginLeft10">
                                    <option value={''}>Select an option</option>
                                    {salesPersons.respone.map(salesPerson =>
                                        <option value={salesPerson.id}>{`${salesPerson.firstName} ${salesPerson.lastName}`}</option>
                                    )};
                                </select>
                            </label>
                        </div>
                        <div className="selectRow">
                            <label>
                                Select a customer:
                                <select name="customer_id" onChange={handleInputChange} className="marginLeft10">
                                    <option value={''}>Select an option</option>
                                    {customers.respone.map(customer =>
                                        <option value={customer.id}>{`${customer.firstName} ${customer.lastName}`}</option>
                                    )};
                                </select>
                            </label>
                        </div>
                        {isInValidData && (<div className="errorMessage"> Please select all options!</div>)}
                        <div className="selectRow">
                            <button onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SalesPage;