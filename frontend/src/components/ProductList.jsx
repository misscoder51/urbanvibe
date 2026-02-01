import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, isLoading }) => {
    if (isLoading) {
        return <div className="container" style={{ padding: '40px', textAlign: 'center' }}>Loading products...</div>;
    }

    if (products.length === 0) {
        return <div className="container" style={{ padding: '40px', textAlign: 'center' }}>No products found.</div>;
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
