import { useState } from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom";
function Profile({user,profile,setProfile}){
   const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    alert("Profile Saved Successfully");
  navigate("/checkout");
};
  const navigate = useNavigate();

    return(
        <div className="profile-page">
            <div className="profile-card">
                <h1>My Profile</h1>
                <label>Name</label>
                <input type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}/>
                <label>Email</label>
                <input type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}/>
                <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />

        <label>Delivery Address</label>
        <textarea
          name="address"
          value={profile.address}
          onChange={handleChange}
          rows="4"
        />

        <button onClick={handleSave}>
          Save Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
