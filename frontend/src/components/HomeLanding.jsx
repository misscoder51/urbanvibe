import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const HomeLanding = () => {
    const navigate = useNavigate();
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
        fetch(`${API_URL}/products`)
            .then(res => res.json())
            .then(data => {
                setTrending(data.slice(0, 11));
            })
            .catch(err => console.error("Error fetching trending:", err));
    }, []);

    const brandLogos = [
        "NIKE", "ADIDAS", "PUMA", "ZARA", "H&M", "LEVIS", "VANS", "CONVERSE",
        "NIKE", "ADIDAS", "PUMA", "ZARA", "H&M", "LEVIS", "VANS", "CONVERSE",
        "NIKE", "ADIDAS", "PUMA", "ZARA", "H&M", "LEVIS", "VANS", "CONVERSE"
    ];

    return (
        <div style={{ paddingBottom: '80px', overflowX: 'hidden' }}>
            {/* Infinite Marquee */}
            <div className="marquee-container">
                <div className="marquee-content">
                    {brandLogos.map((brand, index) => (
                        <span key={index} className="marquee-item">{brand}</span>
                    ))}
                </div>
            </div>

            {/* Interactive Hero Section */}
            <div style={{
                position: 'relative',
                height: '55vh',
                minHeight: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {/* Background Image with Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -2
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(180deg, rgba(99,102,241,0.4) 0%, rgba(236,72,153,0.4) 100%)',
                    backdropFilter: 'blur(2px)',
                    zIndex: -1
                }}></div>

                {/* Hero Content */}
                <div className="container" style={{ position: 'relative', zIndex: 1, animation: 'fadeInUp 1s ease-out' }}>
                    <h1 style={{
                        fontSize: 'clamp(48px, 8vw, 96px)',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: '24px',
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                        textShadow: '0 4px 10px rgba(0,0,0,0.3)'
                    }}>
                        Define Your <br />
                        <span style={{
                            background: 'white',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 20px rgba(255,255,255,0.5)'
                        }}>Vibe.</span>
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        marginBottom: '48px',
                        fontWeight: 500,
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}>
                        Streetwear collections curated for the next generation.
                    </p>
                    <button
                        className="btn btn-primary"
                        style={{
                            fontSize: '18px',
                            padding: '16px 48px',
                            boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)'
                        }}
                        onClick={() => navigate('/shop')}
                    >
                        Shop Now
                    </button>
                </div>
            </div>

            <div className="container" style={{ marginTop: '80px' }}>
                {/* Categories Section */}
                <div style={{ marginBottom: '80px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 800 }}>SHOP BY CATEGORY</h2>
                        <div style={{ height: '2px', flex: 1, background: 'var(--border)' }}></div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
                        {[
                            { name: 'MEN', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80', link: '/shop?category=Men' },
                            { name: 'WOMEN', img: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=800&q=80', link: '/shop?category=Women' },
                            { name: 'HOME', img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80', link: '/shop?category=Home' },
                            { name: 'BEAUTY', img: '/beauty.png', link: '/shop?category=Beauty' }
                        ].map((cat, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate(cat.link)}
                                style={{
                                    height: '350px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    boxShadow: 'var(--shadow-md)'
                                }}
                                className="product-card" // Reusing hover effects
                            >
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    backgroundImage: `url(${cat.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'transform 0.5s'
                                }} className="cat-bg"></div>
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                                }}></div>
                                <div style={{
                                    position: 'absolute', bottom: '30px', left: '30px',
                                    color: 'white', fontWeight: 900, fontSize: '32px', fontStyle: 'italic'
                                }}>
                                    {cat.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trending Section */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '30px' }}>
                    <div>
                        <h2 style={{ fontSize: '32px', fontWeight: 800, lineHeight: 1 }}>TRENDING DROPS</h2>
                        <p style={{ color: 'var(--text-light)', marginTop: '8px' }}>Hot right now.</p>
                    </div>
                    <button className="btn btn-outline" onClick={() => navigate('/shop')}>View All</button>
                </div>

                <div className="product-marquee-container">
                    <div className="product-marquee-track">
                        {/* Duplicate products for infinite scroll */}
                        {[...trending, ...trending].map((product, index) => (
                            <div key={`${product.id}-${index}`} style={{ width: '400px', height: '400px', flexShrink: 0 }}>
                                <ProductCard product={product} style={{ height: '100%' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .product-card:hover .cat-bg {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default HomeLanding;
