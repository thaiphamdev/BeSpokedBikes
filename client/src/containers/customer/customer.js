import React, { useEffect, useState }  from 'react';
import './customer.css';
import '../../common.css'

const CustomerPage = (props) => {
        const { customers, getCustomers } = props;
    
        useEffect(() => {
            getCustomers();
        }, []);
    
    
        
        const renderRow = (customer) => {
            
                return (
                    <tr key={customer.id}>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.address}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.startDate}</td>
                    </tr>
                )
        }
    
        return (
            <div className="PageContainer">
                <div className="Heading">
                    <h1>Customers Page</h1>
                </div>
                <main>
                    {customers?.isLoading && <div>Loading...</div>}
                    {customers?.isError && <div>Oops... Something went wrong...</div>}
                    {!customers?.isLoading && !customers?.isError && customers?.respone && (
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Start Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.respone.map((customer) => (
                                    renderRow(customer)
                                ))}
                            </tbody>
                        </table>
                    )}
                </main>
            </div>
        );
    }

export default CustomerPage;