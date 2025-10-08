import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart, onViewDetails }) {
    const { price, originalPrice, discount, rating } = product;

    const finalPrice = price ?? discount ?? 0;

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star">★</span>);
        }

        if (hasHalfStar) {
            stars.push(<span key="half" className="star half-star">⯨</span>);
        }

        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star">☆</span>);
        }

        return (
            <span className="rating">
                {stars} ({rating.toFixed(1)})
            </span>
        );
    };


    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name || 'ไม่มีชื่อสินค้า'}</h3>
                <p className="product-description">{product.description || '-'}</p>

                {/* แสดง Rating */}
                {rating && renderStars(rating)}

                <div className="product-price">
                    {originalPrice && originalPrice > finalPrice && (
                        <div className="price-block">
                            <span className="original-price">
                                ฿{originalPrice.toLocaleString()}
                            </span>
                            {discount > 0 && (
                                <span className="discount">
                                    ลด {Math.round(((originalPrice - finalPrice) / originalPrice) * 100)}%
                                </span>
                            )}
                        </div>
                    )}
                    <div className="final-price">
                        ฿{finalPrice.toLocaleString()}
                    </div>
                </div>

                <div className="product-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!product.inStock}
                    >
                        {product.inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        price: PropTypes.number,
        originalPrice: PropTypes.number,
        discount: PropTypes.number,
        category: PropTypes.string,
        image: PropTypes.string,
        inStock: PropTypes.bool,
        rating: PropTypes.number
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;
