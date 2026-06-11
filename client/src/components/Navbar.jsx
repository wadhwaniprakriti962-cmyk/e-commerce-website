import { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FiMoon, FiSun } from "react-icons/fi";

function Navbar({cart,darkMode,setDarkMode}
) {
  console.log("Navbar rendered");
  const location = useLocation();
  const navigate=useNavigate();
  console.log(location.pathname);
  const isLoginPage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${isLoginPage ? "transparent" : "solid"}`}>

      <div className="logo-section">
        <img src={logo} className="logo-img" alt="NutriGo Logo" />
        <div className="logo">NutriGo</div>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/orders">Orders</Link></li>
      </ul>

      <div className="nav-icons">
        <div className="cart-icon">
  <Link to="/cart">
  <div className="cart-icon">
    <FiShoppingCart className="nav-icon" />
    <span className="cart-count">
      {cart.reduce((acc, item) => acc + item.quantity, 0)}
    </span>
  </div>
</Link>
 
</div>
   <div
  className="cart-icon"
  onClick={() => navigate("/profile")}
>
  <FiUser className="nav-icon" />
</div>
<div
  className="theme-toggle"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? <FiSun size={28}/> : <FiMoon size={28}/>}
</div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

    </nav>
  );
}

export default Navbar;