import React, { useEffect, useState } from 'react';
import './salesPersons.css';
import '../../common.css'

const SalesPersonsPage = (props) => {
    const { salesPersons, getSalesPersons, updateSalesPerson } = props;

    useEffect(() => {
        getSalesPersons();
    }, []);

    useEffect(() => {
        if (salesPersons?.responeUpdate?.id) {
            getSalesPersons();
        }
    }, [salesPersons?.responeUpdate]);

    const [selectedRow, setSelectedRow] = useState(null);
    const [formData, setFormData] = useState({ id: '', firstName: '', lastName: '', address: '', phone: '', startDate: '', terminationDate: '', manager: '' });

    const handleEditClick = (row) => {
        setSelectedRow(row.id);
        setFormData(row); // Populate the form with the current row data
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateSalesPerson(formData); // Call the update action
        setSelectedRow(null); // Exit edit mode
    };

    const renderRow = (salesPerson) => {
        if (salesPerson.id === selectedRow) {
            return (
                <tr key={salesPerson.id} className="active">
                    <td>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="terminationDate"
                            value={formData.terminationDate}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            name="manager"
                            value={formData.manager}
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <button onClick={handleFormSubmit}>Save</button>
                        <button onClick={()=>setSelectedRow(null)} className="marginTop5">Cancel</button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr key={salesPerson.id}>
                    <td>{salesPerson.firstName}</td>
                    <td>{salesPerson.lastName}</td>
                    <td>{salesPerson.address}</td>
                    <td>{salesPerson.phone}</td>
                    <td>{salesPerson.startDate}</td>
                    <td>{salesPerson.terminationDate}</td>
                    <td>{salesPerson.manager}</td>
                    <td><button onClick={() => handleEditClick(salesPerson)}>Edit</button></td>
                </tr>
            )
        }

    }

    return (
        <div className="PageContainer">
            <div className="Heading">
                <h1>SalesPersons Page</h1>
            </div>
            <main>
                {salesPersons?.isLoading && <div>Loading...</div>}
                {salesPersons?.isError && <div>Oops... Something went wrong...</div>}
                {!salesPersons?.isLoading && !salesPersons?.isError && salesPersons?.respone && (
                    <table border="1" cellPadding="5" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Start Date</th>
                                <th>Termination Date</th>
                                <th>Manager</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesPersons.respone.map((salesPerson) => (
                                renderRow(salesPerson)
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
}

export default SalesPersonsPage;