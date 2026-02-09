import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, User, Heart, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (searchTerm.length < 2) {
                setSuggestions([]);
                return;
            }

            const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
            try {
                const res = await fetch(`${API_URL}/suggestions?q=${encodeURIComponent(searchTerm)}`);
                const data = await res.json();
                setSuggestions(data);
            } catch (err) {
                console.error("Error fetching suggestions:", err);
            }
        };

        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [searchTerm]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        setShowSuggestions(false);
        navigate('/shop');
    };

    const handleSuggestionClick = (text) => {
        setSearchTerm(text);
        onSearch(text);
        setShowSuggestions(false);
        navigate('/shop');
    };

    return (
        <header className="header">
            <div className="container flex items-center justify-between" style={{ height: '100%', width: '100%' }}>
                <Link to="/" className="logo">
                    URBAN<span>VIBE.</span>
                </Link>

                <div className="nav-links flex">
                    <Link to="/shop?category=Men">MEN</Link>
                    <Link to="/shop?category=Women">WOMEN</Link>
                    <Link to="/shop?category=Home">HOME & LIVING</Link>
                    <Link to="/shop?category=Beauty">BEAUTY</Link>
                </div>

                <div style={{ position: 'relative' }}>
                    <form onSubmit={handleSearch} className="search-bar" style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'var(--bg-page)',
                        borderRadius: '12px', /* Matching button radius */
                        padding: '8px 16px',
                        width: '320px',
                        gap: '10px',
                        border: '1px solid var(--border)'
                    }}>
                        <Search className="search-icon" size={18} color="var(--text-light)" />
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                                fontSize: '14px',
                                color: 'var(--text-main)',
                                fontFamily: 'var(--font-main)'
                            }}
                        />
                    </form>

                    {showSuggestions && suggestions.length > 0 && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            backgroundColor: 'white',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            marginTop: '8px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            zIndex: 1000,
                            overflow: 'hidden'
                        }}>
                            {suggestions.map((s, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => handleSuggestionClick(s.text)}
                                    style={{
                                        padding: '12px 16px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        borderBottom: idx === suggestions.length - 1 ? 'none' : '1px solid #f0f0f0'
                                    }}
                                    className="suggestion-item"
                                >
                                    <span>{s.text}</span>
                                    <span style={{ fontSize: '10px', color: '#888', textTransform: 'uppercase' }}>{s.type}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex gap-4 items-center">
                    <Link to="/profile" className="flex flex-col items-center cursor-pointer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <User size={20} />
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Profile</span>
                    </Link>
                    <Link to="/wishlist" className="flex flex-col items-center cursor-pointer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Heart size={20} />
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Wishlist</span>
                    </Link>
                    <Link to="/cart" className="flex flex-col items-center cursor-pointer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{ position: 'relative' }}>
                            <ShoppingBag size={20} />
                            {cartCount > 0 && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-5px',
                                    right: '-8px',
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '18px',
                                    height: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '10px',
                                    fontWeight: 'bold'
                                }}>{cartCount}</span>
                            )}
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: 600 }}>Bag</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
