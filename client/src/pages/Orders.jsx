import "./Orders.css";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";

function Orders({profile,orderPlaced}) {
  const navigate = useNavigate();
  if (!orderPlaced) {
  return (
    <div className="orders-page">
      <FiShoppingBag size={80} />

      <h1>No Orders Yet</h1>

      <p className="thank-you">
        Looks like you haven't placed any orders.
      </p>

      <button
        className="continue-btn"
        onClick={() => navigate("/explore")}
      >
        Explore Meals
      </button>
    </div>
  );
}

  return (
    <div className="orders-page">

      <h1>Order Placed Successfully 🎉</h1>

      <p className="thank-you">
        Thank you for ordering with NutriGo!
      </p>

      <div className="order-details">
        <h2>Order Details</h2>

        <p><strong>Order ID:</strong> #NT123</p>

        <p><strong>Estimated Delivery:</strong> 20-25 Minutes</p>
      </div>

      <div className="address">
        <h2>Delivery Address</h2>

         <p>{profile.name}</p>

        <p>{profile.address}</p>
      </div>

      <button
        className="continue-btn"
        onClick={() => navigate("/home")}
      >
        Continue Shopping
        <FiShoppingCart size={22}/>
      </button>
    
    </div>
    
  );
}

export default Orders;