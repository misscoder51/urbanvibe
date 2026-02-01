import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from './FilterSidebar';
import ProductList from './ProductList';

const ProductListing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();

    const [filters, setFilters] = useState({
        category: searchParams.get('category') || '',
        type: searchParams.get('type') || '',
        price: { min: 0, max: 100000 }
    });

    const searchTerm = searchParams.get('search') || '';

    useEffect(() => {
        const cat = searchParams.get('category');
        const type = searchParams.get('type');
        setFilters(prev => ({ ...prev, category: cat || '', type: type || '' }));
    }, [searchParams]);

    useEffect(() => {
        fetchProducts();
    }, [filters, searchTerm]);

    const fetchProducts = () => {
        setLoading(true);
        const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
        let url = new URL(`${API_URL}/products`);

        if (searchTerm) url.searchParams.append('search', searchTerm);
        if (filters.category) url.searchParams.append('category', filters.category);
        if (filters.type) url.searchParams.append('type', filters.type);
        if (filters.price.min !== undefined) url.searchParams.append('min_price', filters.price.min);
        if (filters.price.max !== undefined) url.searchParams.append('max_price', filters.price.max);

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching products:", err);
                setLoading(false);
            });
    };

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));

        // Update URL map
        const newParams = new URLSearchParams(searchParams);
        if (key === 'category') {
            if (value) newParams.set('category', value);
            else newParams.delete('category');
        } else if (key === 'type') {
            if (value) newParams.set('type', value);
            else newParams.delete('type');
        }
        setSearchParams(newParams);
    };

    return (
        <div className="container main-layout">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
            <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: 700 }}>
                    {filters.category ? `${filters.category} Fashion` : 'All Products'}
                    {searchTerm && ` - Search results for "${searchTerm}"`}
                    <span style={{ color: '#878b94', fontSize: '16px', fontWeight: 400, marginLeft: '10px' }}>- {products.length} items</span>
                </h3>
                <ProductList products={products} isLoading={loading} />
            </div>
        </div>
    );
};

export default ProductListing;
