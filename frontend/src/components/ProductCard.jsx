import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div className="product-card" onClick={() => {
            console.log("Card clicked for product:", product.id);
            navigate(`/product/${product.id}`);
        }}>
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
                <h3 className="product-brand">{product.brand}</h3>
                <p className="product-name">{product.name}</p>
                <div className="flex items-center">
                    <span className="product-price">₹{product.price}</span>
                    {product.discount > 0 && (
                        <span className="product-discount">({product.discount}% OFF)</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
