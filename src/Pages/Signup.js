import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup({ onLogin }) {
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
      const res = await axios.post("http://localhost:3001/api/signup", {
        custNb,
        password,
      });

      if (res.data.ok) {
        localStorage.setItem("custNb", custNb); // ✅ important
        if (onLogin) onLogin(custNb);
        nav("/menu");
      } else {
        alert(res.data.message || "Signup failed.");
      }

    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Server error while signing up.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>SIGNUP</h1>

        <form className="auth-form" onSubmit={submit}>
          <label>Phone Number (8 digits)</label>
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
            placeholder="choose any password"
          />

          <div className="auth-actions">
            <button className="auth-btn" type="submit">
              SIGN UP
            </button>
          </div>

          <div className="auth-linkRow">
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
