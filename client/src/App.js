import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar"


function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [orderPlaced,setOrderPlaced]=useState(false);
  const addToCart = (meal) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === meal.id);


    if (existing) {
      return prev.map((item) =>
        item.id === meal.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...meal, quantity: 1 }];
  });
};

const removeFromCart = (meal) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === meal.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
const [profile, setProfile] = useState({
  name: user?.name || "",
  email: user?.email || "",
  phone: "",
  address: ""
});
const [darkMode, setDarkMode] = useState(false);
  return (
  <div className={darkMode ? "dark-theme app-wrapper" : "app-wrapper"}>
    <BrowserRouter>
      <Navbar
  cart={cart}
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>
      <Routes>

        <Route
         path="/"
         element={<Login setUser={setUser} />}
         />

        <Route
        path="/home"
        element={<Home 
          user={user}
          cart={cart}
          addToCart={addToCart} />}
        />

        <Route
  path="/explore"
  element={
    <Explore
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  }
/>



        <Route path="/orders" element={<Orders  profile={profile}
          orderPlaced={orderPlaced}/>} />

        <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
    />
  }
/>

        <Route path="/checkout" element={<Checkout cart={cart}
         setOrderPlaced={setOrderPlaced}
        profile={profile} />} />
        <Route
  path="/profile"
  element={
    <Profile
      profile={profile}
      setProfile={setProfile}
    />
  }
/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;