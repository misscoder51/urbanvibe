import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingBag, ChevronRight, Star, Heart } from 'lucide-react';
import SizeGuideModal from './SizeGuideModal';

const ProductDetails = ({ addToCart, addToWishlist, wishlist = [], removeFromWishlist }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);

    const [selectedVariantImage, setSelectedVariantImage] = useState(null);
    const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
        fetch(`${API_URL}/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setSelectedVariantImage(data.image); // Set initial image
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="container" style={{ marginTop: '40px' }}>Loading...</div>;
    if (!product) return <div className="container" style={{ marginTop: '40px' }}>Product not found</div>;

    const sizes = product.sizes ? product.sizes.split(', ') : [];
    const variants = product.variants ? JSON.parse(product.variants) : [];

    // Check if product is in wishlist
    const isInWishlist = wishlist.some(item => item.id === product.id);

    const handleWishlistClick = () => {
        if (isInWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist({ ...product, image: selectedVariantImage });
        }
    };

    return (
        <div className="container" style={{ display: 'flex', gap: '60px', marginTop: '40px', paddingBottom: '80px', flexWrap: 'wrap' }}>
            {/* Left Column: Image */}
            <div style={{ flex: '1.5', minWidth: '350px' }}>
                <div style={{ width: '100%', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={selectedVariantImage}
                        alt={product.name}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain', maxHeight: '700px' }}
                    />
                </div>
            </div>

            {/* Right Column: Info */}
            <div style={{ flex: '1', minWidth: '300px', paddingRight: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#666' }}>{product.brand}</span>
                        <h1 style={{ fontSize: '24px', fontWeight: 500, margin: '5px 0 15px 0', fontFamily: 'Space Grotesk, sans-serif' }}>{product.name}</h1>
                    </div>
                    <Heart
                        size={24}
                        style={{ cursor: 'pointer' }}
                        fill={isInWishlist ? "#FF0000" : "none"}
                        color={isInWishlist ? "#FF0000" : "#121212"}
                        onClick={handleWishlistClick}
                    />
                </div>

                <div style={{ marginBottom: '30px', fontSize: '18px' }}>
                    <span style={{ fontWeight: 700 }}>₹{product.price.toFixed(2)}</span>
                    <span style={{ fontSize: '12px', color: '#666', marginLeft: '5px', fontWeight: 400 }}>inclusive of all taxes</span>
                </div>

                {variants.length > 0 && (
                    <div style={{ marginBottom: '30px' }}>
                        <p style={{ fontSize: '13px', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase' }}>
                            Colour: <span style={{ fontWeight: 400 }}>{variants.find(v => v.image === selectedVariantImage)?.color || 'Selected'}</span>
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', maxWidth: '300px' }}>
                            {variants.map((variant, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedVariantImage(variant.image)}
                                    style={{
                                        border: selectedVariantImage === variant.image ? '1px solid #121212' : '1px solid transparent',
                                        padding: '2px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{
                                        width: '100%',
                                        paddingBottom: '100%',
                                        backgroundImage: `url(${variant.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundColor: '#f5f5f5'
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {sizes.length > 0 && (
                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <p style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase' }}>Select Size</p>
                            <span
                                onClick={() => setIsSizeGuideOpen(true)}
                                style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer', color: '#666' }}
                            >
                                Size Guide
                            </span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className=""
                                    style={{
                                        minWidth: '50px',
                                        height: '50px',
                                        fontSize: '14px',
                                        background: selectedSize === size ? '#121212' : '#FFFFFF',
                                        color: selectedSize === size ? '#FFFFFF' : '#121212',
                                        border: selectedSize === size ? '1px solid #121212' : '1px solid #E5E7EB',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={() => {
                        if (sizes.length > 0 && !selectedSize) {
                            alert("Please select a size");
                            return;
                        }
                        addToCart({ ...product, image: selectedVariantImage, selectedSize });
                    }}
                    style={{
                        width: '100%',
                        backgroundColor: '#121212',
                        color: 'white',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '1px',
                        cursor: 'pointer',
                        border: 'none',
                        marginBottom: '20px'
                    }}
                >
                    ADD
                </button>

                <div style={{ fontSize: '13px', color: '#121212', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '30px' }}>
                    <div style={{ display: 'flex' }}><Star size={14} fill="#121212" /><Star size={14} fill="#121212" /><Star size={14} fill="#121212" /><Star size={14} fill="#121212" /><Star size={14} opacity={0.3} /></div>
                    <span style={{ textDecoration: 'underline' }}>Reviews (143)</span>
                </div>

                <div style={{ fontSize: '13px', color: '#666', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                    <p style={{ marginBottom: '5px', fontWeight: 600, textTransform: 'uppercase', color: '#121212', display: 'flex', justifyContent: 'space-between' }}>Description <ChevronRight size={16} /></p>
                    <p style={{ lineHeight: 1.6 }}>{product.description}</p>
                </div>
            </div>

            <SizeGuideModal
                isOpen={isSizeGuideOpen}
                onClose={() => setIsSizeGuideOpen(false)}
                category={product.category === 'Women' ? 'Women' : 'Men'}
            />
        </div>
    );
};

export default ProductDetails;
