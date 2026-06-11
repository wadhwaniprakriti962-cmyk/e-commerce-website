import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({setUser}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 const handleLogin = () => {

  if (!email.trim()) {
    alert("Email field is empty");
    return;
  }

  setUser({
    name: email.split("@")[0],
    email
  });
  navigate("/home");

};
console.log(email);
console.log(password);
    return (
        <div>

            <div className="hero">

             <div className="login-card">

                <h1>Welcome Back</h1>

                <p>Discover meals made for your lifestyle</p>

                <form>

                    <input 
                        type="email" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email Address" 
                    />

                    <input 
                        type="password" 
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        placeholder="Password" 
                    />
                   <div className="btn-grp">
                    <button className="login-btn" type="button" onClick={handleLogin}>
                        Login
                    </button>
                   <button className="google-btn">
                    Continue with Google
                  </button>
                  </div>
                </form>
            </div>
          </div>
        </div>
    )
}

export default Login