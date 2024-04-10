import React, { useState } from 'react';
import './login.css';

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePost = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <div className="form">
        <form className="userData" onSubmit={handlePost}>
          <label htmlFor="name">Enter the Username</label>
          <input
            type="text"
            placeholder="Enter the Username"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Enter the Email</label>
          <input
            type="text"
            placeholder="Enter the Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Enter the Password</label>
          <input
            type="text"
            placeholder="Enter the Password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button type="submit" id="btn">Sign in</button>
        </form>
      </div>
    </div>
  );
}
