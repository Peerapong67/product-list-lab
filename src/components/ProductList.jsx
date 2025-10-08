import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');

    const filteredProducts = useMemo(() => {
        let result = products;

        // Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(product => product.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery.trim() !== '') {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort products
        if (sortBy) {
            result = [...result].sort((a, b) => {
                if (sortBy === 'name') {
                    return a.name.localeCompare(b.name);
                }
                if (sortBy === 'price') {
                    return (a.discount ?? a.price) - (b.discount ?? b.price);
                }
                if (sortBy === 'rating') {
                    return (b.rating ?? 0) - (a.rating ?? 0); // high to low
                }
                return 0;
            });
        }

        return result;
    }, [products, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="product-list-container">
            {/* Header */}
            <div className="header">
                <h1>🛍️ ร้านค้าออนไลน์</h1>
                <p>Lab 3.2 - การสร้าง Components และ Props</p>
            </div>

            {/* Filters */}
            <div className="filters">
                {/* Category Filter */}
                <div>
                    <label htmlFor="category-select">หมวดหมู่: </label>
                    <select
                        id="category-select"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Search Box */}
                <div>
                    <label htmlFor="search-input">ค้นหา: </label>
                    <input
                        id="search-input"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="ค้นหาสินค้า..."
                    />
                </div>

                {/* Sort Dropdown */}
                <div>
                    <label htmlFor="sort-select">เรียงลำดับ: </label>
                    <select
                        id="sort-select"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="">ไม่มีการเรียงลำดับ</option>
                        <option value="name">ชื่อ</option>
                        <option value="price">ราคา</option>
                        <option value="rating">คะแนนรีวิว</option>
                    </select>
                </div>
            </div>

            {/* Products Display */}
            <div className="products-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onViewDetails={onViewDetails}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center' }}>ไม่พบสินค้าตามการค้นหา</p>
                )}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductList; 
