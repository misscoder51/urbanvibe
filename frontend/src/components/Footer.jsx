import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#F9FAFB',
            padding: '60px 0 30px',
            marginTop: '80px',
            borderTop: '1px solid #E5E7EB',
            fontSize: '13px',
            color: '#121212'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>

                {/* Column 1: Shop */}
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Shop</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="/shop?category=Women" style={{ textDecoration: 'none', color: '#121212' }}>Ladies</a></li>
                        <li><a href="/shop?category=Men" style={{ textDecoration: 'none', color: '#121212' }}>Men</a></li>
                        <li><a href="/shop?category=Home" style={{ textDecoration: 'none', color: '#121212' }}>Home</a></li>
                        <li><a href="/shop?category=Beauty" style={{ textDecoration: 'none', color: '#121212' }}>Beauty</a></li>
                    </ul>
                </div>

                {/* Column 2: Corporate Info */}
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Corporate Info</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Career at Urbanvibe</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>About Us</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Sustainability</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Press</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Investor Relations</a></li>
                    </ul>
                </div>

                {/* Column 3: Help */}
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Help</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Customer Service</a></li>
                        <li><a href="/profile" style={{ textDecoration: 'none', color: '#121212' }}>My Profile</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Find a Store</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Legal & Privacy</a></li>
                        <li><a href="#" style={{ textDecoration: 'none', color: '#121212' }}>Contact</a></li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '20px', textTransform: 'uppercase' }}>Join the Vibe</h4>
                    <p style={{ marginBottom: '20px', lineHeight: '1.5' }}>Sign up now and be the first to know about exclusive offers, new drops & style tips!</p>
                    <a href="#" style={{ textDecoration: 'none', fontWeight: 700, borderBottom: '1px solid #121212' }}>READ MORE</a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '30px',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{
                        fontSize: '24px',
                        fontWeight: 900,
                        background: 'var(--primary-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-1px'
                    }}>URBANVIBE</span>
                    <p style={{ opacity: 0.6 }}>The content of this site is copyright-protected and is the property of Urbanvibe.</p>
                </div>

                <div style={{ display: 'flex', gap: '24px' }}>
                    <Instagram size={20} />
                    <Twitter size={20} />
                    <Youtube size={20} />
                    <Facebook size={20} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
