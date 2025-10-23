import React from 'react'
import styles from './Navbar.module.css';
import { FaShoppingCart} from "react-icons/fa";
import { Link } from "react-router-dom";
import {useCart} from "../../Context/CartContext/CartContext"

const Navbar = () => {
  const { cartCount } = useCart();
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow-sm`}>
      <div className="container-fluid">
        <Link className={`navbar-brand fw-bold fs-4 ${styles.brand}`} to="/">
          🛒 GroceMart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${styles.link}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/offers">
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.link}`} to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/checkout">
                <FaShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className={`badge bg-danger position-absolute top-0 start-100 translate-middle ${styles.cartBadge}`}>
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <button className={`btn btn-light btn-sm ms-lg-3 mt-2 mt-lg-0 fw-bold ${styles.loginBtn}`}>
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar