import React, { useState } from 'react';
import { ShoppingBag, Search, User, Heart, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ cartCount, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
        navigate('/');
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
