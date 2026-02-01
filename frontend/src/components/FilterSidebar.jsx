import React from 'react';

const CATEGORY_FILTERS = {
    'Men': ['Shirt', 'Jeans', 'Shoes', 'Jacket', 'Trousers'],
    'Women': ['Dress', 'Jeans', 'Shoes', 'Top', 'Bag'],
    'Home': ['Decor', 'Bedding', 'Kitchen'],
    'Beauty': ['Makeup', 'Skincare', 'Fragrance']
};

const FilterSidebar = ({ filters, onFilterChange }) => {
    const currentCategory = filters.category || '';

    const availableTypes = currentCategory && CATEGORY_FILTERS[currentCategory]
        ? CATEGORY_FILTERS[currentCategory]
        : Array.from(new Set(Object.values(CATEGORY_FILTERS).flat()));



    const handleTypeChange = (type) => {
        onFilterChange('type', type === filters.type ? '' : type); // Toggle
    };

    const clearFilters = () => {
        onFilterChange('category', '');
        onFilterChange('type', '');
        onFilterChange('price', { min: 0, max: 100000 });
    };

    return (
        <div className="filters" style={{
            width: '250px',
            paddingRight: '20px',
            borderRight: '1px solid #f0f0f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
        }}>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, textTransform: 'uppercase' }}>Filters</h3>
                <button onClick={clearFilters} style={{ fontSize: '12px', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)' }}>CLEAR ALL</button>
            </div>



            {/* Types */}
            <div className="filter-group">
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', color: 'var(--text-main)' }}>Product Type</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {availableTypes.map(type => (
                        <div
                            key={type}
                            onClick={() => handleTypeChange(type)}
                            style={{
                                cursor: 'pointer',
                                fontWeight: filters.type === type ? 600 : 400,
                                color: filters.type === type ? 'var(--primary)' : 'var(--text-main)',
                                padding: '6px 0',
                                display: 'flex', alignItems: 'center', gap: '10px',
                                transition: 'all 0.2s'
                            }}
                        >
                            <div style={{
                                width: '18px', height: '18px',
                                borderRadius: '6px',
                                border: `2px solid ${filters.type === type ? 'var(--primary)' : 'var(--border)'}`,
                                background: filters.type === type ? 'var(--primary)' : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {filters.type === type && <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '2px' }}></div>}
                            </div>
                            <span style={{ fontSize: '14px' }}>{type}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div className="filter-group">
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase' }}>Price</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                        { label: 'All Prices', min: 0, max: 100000 },
                        { label: 'Under ₹1000', min: 0, max: 1000 },
                        { label: '₹1000 - ₹2000', min: 1000, max: 2000 },
                        { label: '₹2000 - ₹5000', min: 2000, max: 5000 },
                        { label: 'Over ₹5000', min: 5000, max: 100000 }
                    ].map((range, idx) => (
                        <div
                            key={idx}
                            onClick={() => onFilterChange('price', { min: range.min, max: range.max })}
                            style={{
                                cursor: 'pointer',
                                // Minimal check logic for simplicity, could be better matched
                                padding: '4px 0',
                                display: 'flex', alignItems: 'center', gap: '8px'
                            }}
                        >
                            <span style={{ fontSize: '14px' }}>{range.label}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FilterSidebar;
