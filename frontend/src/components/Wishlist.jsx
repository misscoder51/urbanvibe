import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Wishlist = ({ wishlist, removeFromWishlist, moveToCart }) => {
    const navigate = useNavigate();

    if (wishlist.length === 0) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Your Wishlist is Empty</h2>
                <p style={{ color: '#535766', marginBottom: '30px' }}>Save items that you like in your wishlist. Review them anytime and easily move them to the bag.</p>
                <button className="btn btn-outline" onClick={() => navigate('/shop')}>CONTINUE SHOPPING</button>
            </div>
        )
    }

    return (
        <div className="container" style={{ marginTop: '40px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>My Wishlist <span style={{ fontWeight: 400, color: '#878b94' }}>({wishlist.length} items)</span></h2>
            <div className="product-grid">
                {wishlist.map(product => (
                    <div key={product.id} className="product-card" style={{ position: 'relative' }}>
                        <button
                            onClick={(e) => { e.stopPropagation(); removeFromWishlist(product.id); }}
                            style={{
                                position: 'absolute', top: '10px', right: '10px',
                                background: 'rgba(255,255,255,0.8)', padding: '5px',
                                borderRadius: '50%', border: 'none', cursor: 'pointer', zIndex: 10
                            }}
                        >
                            <Trash2 size={16} color="#ff3e6c" />
                        </button>
                        <div onClick={() => navigate(`/product/${product.id}`)}>
                            <div className="product-image-container">
                                <img src={product.image} alt={product.name} className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3 className="product-brand">{product.brand}</h3>
                                <p className="product-name">{product.name}</p>
                                <div className="flex items-center" style={{ marginBottom: '10px' }}>
                                    <span className="product-price">₹{product.price}</span>
                                    {product.discount > 0 && (
                                        <span className="product-discount">({product.discount}% OFF)</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn"
                            style={{ width: '100%', color: '#ff3e6c', borderTop: '1px solid #eaeaec', fontWeight: 700, padding: '12px' }}
                            onClick={() => moveToCart(product)}
                        >
                            MOVE TO BAG
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
