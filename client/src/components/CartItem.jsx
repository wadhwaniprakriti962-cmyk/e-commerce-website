import "./CartItem.css";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cart-item">

      {/* Image */}
      <img src={item.image} alt={item.name} />

      {/* Details */}
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>₹{item.price}</p>

        {/* Quantity Controls */}
        <div className="qty-controls">
          <button onClick={() => removeFromCart(item)}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => addToCart(item)}>+</button>
        </div>

        {/* Item Total */}
        <p>
          Item Total: ₹{item.price * item.quantity}
        </p>

      </div>
    </div>
  );
};

export default CartItem;