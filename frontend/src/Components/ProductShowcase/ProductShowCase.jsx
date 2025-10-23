import React from 'react'
import { Products } from '../../Data/images'
import styles from './ProductShowCase.module.css'
import { useCart } from '../../Context/CartContext/CartContext'

const ProductShowCase = () => {
    const { addToCart } = useCart();
    return (
        <div className={`container mt-5 ${styles.showcase}`}>
            <h2 className="text-center mb-4 fw-bold text-success">Our Products</h2>
            <div className="row g-4">
                {Products.map((item) => (
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                        <div className={`card h-100 shadow-sm ${styles.productCard}`}>
                            <img
                                src={item.img}
                                className={`card-img-top ${styles.productImg}`}
                                alt={item.name}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title fw-semibold">{item.name}</h5>

                                <div className={styles.priceContainer}>
                                    <span className={styles.originalPrice}>₹{item.originalPrice}</span>
                                    <span className={styles.offerPrice}>₹{item.price}</span>
                                </div>

                                <button
                                    className="btn btn-success btn-sm mt-2"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProductShowCase