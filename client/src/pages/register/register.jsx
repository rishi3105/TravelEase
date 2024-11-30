// Register.jsx
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentialsR, setCredentialsR] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    city: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChangeR = (e) => {
    setCredentialsR((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClickRegister = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentialsR);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register-wrapper">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Username"
            name="username"
            id="username"
            onChange={handleChangeR}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={handleChangeR}
            required
          />
          <input
            type="number"
            placeholder="Mobile No"
            name="number"
            id="number"
            onChange={handleChangeR}
            required
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            id="city"
            onChange={handleChangeR}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={handleChangeR}
            required
          />
          <button
            type="submit"
            disabled={loading}
            onClick={handleClickRegister}
          >
            Register
          </button>
        </form>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
