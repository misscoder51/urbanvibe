import React, { useState } from 'react';
import { X } from 'lucide-react';

const SizeGuideModal = ({ isOpen, onClose, category = 'Men' }) => {
    if (!isOpen) return null;

    const [activeTab, setActiveTab] = useState(category === 'Women' ? 'Women' : 'Men');

    const menData = [
        { size: 'XXS', chest: '28.1 - 31.5', waist: '22.5 - 25.5', hip: '28.5 - 31.5', height: '< 5\'7"' },
        { size: 'XS', chest: '31.5 - 35', waist: '25.5 - 29', hip: '31.5 - 35', height: '5\'7" - 6\'0"' },
        { size: 'S', chest: '35 - 37.5', waist: '29 - 32', hip: '35 - 37.5', height: '5\'7" - 6\'0"' },
        { size: 'M', chest: '37.5 - 41', waist: '32 - 35', hip: '37.5 - 41', height: '5\'7" - 6\'0"' },
        { size: 'L', chest: '41 - 44', waist: '35 - 38', hip: '41 - 44', height: '5\'7" - 6\'0"' },
        { size: 'XL', chest: '44 - 48.5', waist: '38 - 43', hip: '44 - 47', height: '5\'7" - 6\'0"' },
        { size: 'XXL', chest: '48.5 - 53.5', waist: '43 - 47.5', hip: '47 - 50.5', height: '6\'0" - 6\'5"' },
        { size: '3XL', chest: '53.5 - 58', waist: '47.5 - 52.5', hip: '50.5 - 53.5', height: '6\'0" - 6\'5"' },
    ];

    const womenData = [
        { size: 'XXS', bust: '27.5 - 29.5', waist: '21.25 - 23.5', hip: '30.5 - 33' },
        { size: 'XS', bust: '29.5 - 32.5', waist: '23.5 - 26', hip: '33 - 35.5' },
        { size: 'S', bust: '32.5 - 35.5', waist: '26 - 29', hip: '35.5 - 38.5' },
        { size: 'M', bust: '35.5 - 38', waist: '29 - 31.5', hip: '38.5 - 41' },
        { size: 'L', bust: '38 - 41', waist: '31.5 - 34.5', hip: '41 - 44' },
        { size: 'XL', bust: '41 - 44.5', waist: '34.5 - 38.5', hip: '44 - 47' },
        { size: 'XXL', bust: '44.5 - 48.5', waist: '38.5 - 42.5', hip: '47 - 50' },
    ];

    const renderTable = (data, isWomen) => (
        <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #ddd' }}>
                        <th style={{ padding: '12px 8px', fontWeight: '700' }}>Size</th>
                        <th style={{ padding: '12px 8px', fontWeight: '700' }}>{isWomen ? 'Bust (in)' : 'Chest (in)'}</th>
                        <th style={{ padding: '12px 8px', fontWeight: '700' }}>Waist (in)</th>
                        <th style={{ padding: '12px 8px', fontWeight: '700' }}>Hip (in)</th>
                        {!isWomen && <th style={{ padding: '12px 8px', fontWeight: '700' }}>Height</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9' }}>
                            <td style={{ padding: '12px 8px', fontWeight: '600' }}>{row.size}</td>
                            <td style={{ padding: '12px 8px' }}>{isWomen ? row.bust : row.chest}</td>
                            <td style={{ padding: '12px 8px' }}>{row.waist}</td>
                            <td style={{ padding: '12px 8px' }}>{row.hip}</td>
                            {!isWomen && <td style={{ padding: '12px 8px' }}>{row.height}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
        }} onClick={onClose}>
            <div style={{
                backgroundColor: 'white', maxWidth: '800px', width: '90%', maxHeight: '90vh', overflowY: 'auto',
                padding: '40px', position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                <button onClick={onClose} style={{
                    position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer'
                }}>
                    <X size={24} />
                </button>

                <h2 style={{ fontSize: '24px', marginBottom: '20px', fontFamily: 'Space Grotesk, sans-serif' }}>Size Guide</h2>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid #eee' }}>
                    <button
                        onClick={() => setActiveTab('Men')}
                        style={{
                            padding: '10px 0',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'Men' ? '2px solid #121212' : '2px solid transparent',
                            fontWeight: activeTab === 'Men' ? '700' : '400',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Men's
                    </button>
                    <button
                        onClick={() => setActiveTab('Women')}
                        style={{
                            padding: '10px 0',
                            background: 'none',
                            border: 'none',
                            borderBottom: activeTab === 'Women' ? '2px solid #121212' : '2px solid transparent',
                            fontWeight: activeTab === 'Women' ? '700' : '400',
                            cursor: 'pointer',
                            fontSize: '16px'
                        }}
                    >
                        Women's
                    </button>
                </div>

                <p style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                    The measurements on the size chart are body measurements. Find your correct size in the chart below.
                </p>

                {activeTab === 'Men' ? renderTable(menData, false) : renderTable(womenData, true)}

                <div style={{ marginTop: '40px' }}>
                    <h3 style={{ fontSize: '16px', marginBottom: '15px' }}>How To Measure</h3>
                    <ul style={{ fontSize: '14px', paddingLeft: '20px', lineHeight: '1.6', color: '#444' }}>
                        <li><strong>{activeTab === 'Men' ? 'CHEST' : 'BUST'}:</strong> Measure around the fullest part of your {activeTab === 'Men' ? 'chest' : 'bust'}, keeping the measuring tape horizontal.</li>
                        <li><strong>WAIST:</strong> Measure around the narrowest part (typically where your body bends side to side), keeping the tape horizontal.</li>
                        <li><strong>HIPS:</strong> Measure around the fullest part of your hips, keeping the tape horizontal.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SizeGuideModal;
