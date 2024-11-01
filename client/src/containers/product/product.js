import React, { useEffect, useState }  from 'react';
import './product.css';
import '../../common.css'
import { priceFormat } from '../../utils';

const ProductPage = (props) => {
        const { products, getProducts, updateProduct } = props;
    
        useEffect(() => {
            getProducts();
        }, []);
    
        useEffect(() => {
            if (products?.responeUpdate?.id) {
                getProducts();
            }
        }, [products?.responeUpdate]);
    
        const [selectedRow, setSelectedRow] = useState(null);
        const [formData, setFormData] = useState({ id: '', name: '', manufacturer: '', style: '', purchasePrice: '', salePrice: '', qtyOnHand: '', commissionPercentage: '' });
    
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
            updateProduct(formData); // Call the update action
            setSelectedRow(null); // Exit edit mode
        };
    
        const renderRow = (product) => {
            if (product.id === selectedRow) {
                return (
                    <tr key={product.id} className="active">
                        <td>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="style"
                                value={formData.style}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="purchasePrice"
                                value={formData.purchasePrice}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="salePrice"
                                value={formData.salePrice}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="qtyOnHand"
                                value={formData.qtyOnHand}
                                onChange={handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                name="commissionPercentage"
                                value={formData.commissionPercentage}
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
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.manufacturer}</td>
                        <td>{product.style}</td>
                        <td>{`$ ${priceFormat(product.purchasePrice)}`}</td>
                        <td>{`$ ${priceFormat(product.salePrice)}`}</td>
                        <td>{product.qtyOnHand}</td>
                        <td>{product.commissionPercentage}</td>
                        <td><button onClick={() => handleEditClick(product)}>Edit</button></td>
                    </tr>
                )
            }
    
        }
    
        return (
            <div className="PageContainer">
                <div className="Heading">
                    <h1>Products Page</h1>
                </div>
                <main>
                    {products?.isLoading && <div>Loading...</div>}
                    {products?.isError && <div>Oops... Something went wrong...</div>}
                    {!products?.isLoading && !products?.isError && products?.respone && (
                        <table border="1" cellPadding="5" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Manufacturer</th>
                                    <th>Style</th>
                                    <th>Purchase Price</th>
                                    <th>Sale Price</th>
                                    <th>Qty On Hand</th>
                                    <th>Commission Percentage</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.respone.map((product) => (
                                    renderRow(product)
                                ))}
                            </tbody>
                        </table>
                    )}
                </main>
            </div>
        );
    }

export default ProductPage;