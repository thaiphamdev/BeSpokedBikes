import React, { useEffect } from 'react';
import './product.css';
import '../../common.css'

const ProductPage = (props) => {
    const { products, getProducts } = props;
    useEffect(() => {
        if(products?.length === 0){
            getProducts();
        }
    }, []);

    return (
        <div className="PageContainer">
            <div className="Heading">
                <h1>My Simple React Product Page</h1>
            </div>
            <main>
                <p>Welcome to my simple React Product page! This is a basic example of a React project.</p>
            </main>
            {products?.length > 0 && (
                <div> Hello... </div>
            )}
        </div>
    );
}

export default ProductPage;