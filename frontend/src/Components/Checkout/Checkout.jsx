import React from "react";
import { useCart } from "../../Context/CartContext/CartContext";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className={styles.checkoutContainer}>
      <h2 className={styles.title}>🛒 Checkout Summary</h2>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty.</p>
      ) : (
        <>
          <div className={styles.cartList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.img} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h5>{item.name}</h5>
                  <p className={styles.price}>₹{item.price.toFixed(2)}</p>
                  <div className={styles.quantityControl}>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h4>Total: ₹{getTotalPrice().toFixed(2)}</h4>
            <button className={styles.checkoutBtn}>Proceed to Payment 💳</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;

