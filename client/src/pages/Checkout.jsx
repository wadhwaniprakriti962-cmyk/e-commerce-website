import "./Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryImg from "../assets/deliveryMan.png";

const Checkout = ({ cart = [] ,profile,setOrderPlaced}) => {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();

  const deliveryFee = 40;
  const GST = 0.05 * subtotal;
  const total = subtotal + GST + deliveryFee;

  const [payment, setPayment] = useState("");

  const setPaymentOpt = (value) => {
    setPayment(value);
  };

  const checkOptions = () => {
  if (payment === "") {
    alert("Please select any payment option");
    return;
  }

  setOrderPlaced(true);
  navigate("/orders");
};

  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>

      <div className="checkout-container">

        {/* Left Side Content */}
        <div className="checkout-content">

          <div className="delivery-section">
            <h2>
              Delivery To (
             <span
              className="profile-link"
              onClick={() => navigate("/profile")}
              >
               Profile
            </span>
            )
            </h2>
            <h3>{profile.name || "Guest User"}</h3>
            <p>{profile.phone || "+91 XXXXX XXXXX"}</p>
            <p>
             {profile.address ||"Please add your delivery address from Profile page"}
            </p>
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>

            {cart.map((item) => (
              <p key={item.id}>
                {item.name} × {item.quantity}
              </p>
            ))}

            <div className="summary">
              <p>Subtotal: ₹{subtotal}</p>
              <p>GST (5%): ₹{GST.toFixed(2)}</p>
              <p>Delivery Fee: ₹{deliveryFee}</p>

              <hr />

              <p>Total Order: ₹{total.toFixed(2)}</p>

              <hr />

              <p>Selected Payment: {payment || "Not Selected"}</p>
            </div>
          </div>

          <div className="payment-section">
            <h2>Payment Method</h2>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentOpt("Cash On Delivery")}
              />
              Cash on Delivery
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentOpt("UPI")}
              />
              UPI
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                onChange={() => setPaymentOpt("Card")}
              />
              Card
            </label>
          </div>

          <button
            className="PlaceOrder"
            onClick={checkOptions}
          >
            Place Order
          </button>
         
        </div>

        {/* Right Side Illustration */}
        <div className="checkout-image">
          <img
            src={deliveryImg}
            alt="Delivery Illustration"
          />
        </div>

      </div>
    </div>
  );
};

export default Checkout;