import axios from "axios";
import React, { useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [credentialsR, setCredentialsR] = useState({
    username: "",
    email: "",
    phoneNo: "",
    password: "",
    city: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()
  const containerRef = useRef(null);

  const handleRegisterClick = () => {
      containerRef.current.classList.add("active");
  };
  const handleLoginClick = () => {
      containerRef.current.classList.remove("active");
  };

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleChangeR = (e) => {
    setCredentialsR((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
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
    <div className="login-wrapper">
        <div className="container" id="container" ref={containerRef}>
            <div className="form-container sign-up">
                <form>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Username" name="username" id="username" onChange={handleChangeR} required />
                    <input type="email" placeholder="Email" name="email" id="email" onChange={handleChangeR} required />
                    <input type="number" placeholder="Mobile No" name="number" id="number" onChange={handleChangeR} required />
                    <input type="text" placeholder="City" name="city" id="city" onChange={handleChangeR} required />
                    <input type="password" placeholder="Password" name="password" id="password" onChange={handleChangeR} required />
                    
                    <button type="submit" disabled={loading} onClick={handleClickRegister}>Register</button>                  
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Login</h1>
                    <input type="text" placeholder="Username" id="username" onChange={handleChange} required />
                    <input type="password" placeholder="Password" id="password" onChange={handleChange} required />

                    <button type="submit" disabled={loading} onClick={handleClickLogin}>Login</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal details to use all of our features</p>
                        <button className="hidden" id="login" onClick={handleLoginClick}>Login</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to use all of site features</p>
                        {/* <Link to="/register"> */}
                          <button className="hidden" id="register" onClick={handleRegisterClick}>Register</button>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
            {error && <span>{error.message}</span>}
        </div>
    </div>
  );
  // return (
  //   <div className="login">
  //     <div className="lContainer">
  //       <input
  //         type="text"
  //         placeholder="username"
  //         id="username"
  //         onChange={handleChange}
  //         className="lInput"
  //       />
  //       <input
  //         type="password"
  //         placeholder="password"
  //         id="password"
  //         onChange={handleChange}
  //         className="lInput"
  //       />
  //       <button disabled={loading} onClick={handleClick} className="lButton">
  //         Login
  //       </button>
  //       {error && <span>{error.message}</span>}
  //     </div>
  //   </div>
  // );
};

export default Login;
