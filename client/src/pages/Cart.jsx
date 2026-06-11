import CartItem from "../components/CartItem";
import "./Cart.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart = [], addToCart, removeFromCart }) => {
  const [coupon, setCoupon] = useState("");
const [discount, setDiscount] = useState(0);
const [couponMessage, setCouponMessage] = useState("");
const [isValid, setIsValid] = useState(false);
  const applyCoupon = () => {
  if (coupon === "NUTRI40") {
    setDiscount(0.4); // 40%
    setCouponMessage("Coupon applied! 40% OFF 🎉");
    setIsValid(true);
  } else {
    setDiscount(0);
    setCouponMessage("Invalid coupon ❌");
    setIsValid(false);
  }
};
const navigate=useNavigate()
const handleCheckout=()=>{
  navigate("/checkout")
}
  // 🟢 Empty cart case
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
        <p>Start adding delicious meals!</p>
      </div>
    );
  }

  // 🟢 Subtotal calculation
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
const discountAmount = subtotal * discount;
  const deliveryFee = 40;
  const gst = subtotal * 0.05;
  
const total =
  subtotal - discountAmount + deliveryFee + gst;

  return (
    <div className="cart-page">

      <h1>My Cart</h1>

      {/* 🟢 Cart Items */}
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            description={item.description}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="coupon-section">
  <h2>Apply Coupon</h2>

  <div className="coupon-box">
    <input
      type="text"
      placeholder="Enter coupon code"
      value={coupon}
      onChange={(e) => setCoupon(e.target.value)}
    />
    <button onClick={applyCoupon}>Apply</button>
  </div>

  {/* message comes from logic */}
  {couponMessage && (
    <p className={isValid ? "success" : "invalid"}>
      {couponMessage}
    </p>
  )}
</div>
      {/* 🟢 Order Summary */}
      <div className="order-summary">
        <h2>Order Summary</h2>

        <p>Subtotal: ₹{subtotal}</p>
        <p>Delivery Fee: ₹{deliveryFee}</p>
        <p>GST (5%): ₹{gst.toFixed(2)}</p>

        <hr />

        <h3>Total: ₹{total.toFixed(2)}</h3>

        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
};

export default Cart;