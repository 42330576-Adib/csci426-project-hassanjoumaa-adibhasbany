import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [custNb, setCustNb] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const isValidPhone = (v) => /^\d{8}$/.test(v);

  const submit = async (e) => {
    e.preventDefault();

    if (!isValidPhone(custNb)) {
      alert("Phone number must be exactly 8 digits.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/api/login", {
        custNb,
        password,
      });

      if (res.data.ok) {
        localStorage.setItem("custNb", custNb); // ✅ important for Menu order check
        if (onLogin) onLogin(custNb);
        nav("/menu");
      } else {
        alert("Invalid phone number or password.");
      }
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Server error while logging in.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>LOGIN</h1>

        <form className="auth-form" onSubmit={submit}>
          <label>Phone Number</label>
          <input
            className="auth-input"
            value={custNb}
            onChange={(e) => setCustNb(e.target.value)}
            placeholder="e.g. 03456789"
          />

          <label>Password</label>
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="your password"
          />

          <div className="auth-actions">
            <button className="auth-btn" type="submit">
              LOGIN
            </button>
          </div>

          <div className="auth-linkRow">
            <span>Don&apos;t have an account?</span>
            <Link to="/signup">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
