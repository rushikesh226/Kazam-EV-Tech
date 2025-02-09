import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../Store/auth";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const history = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      if (data.username === "" || data.password === "") {
        alert("All fields are required");
      } else {
        const resp = await axios.post(
          "https://kazam-ev-tech-3.onrender.com/api/v1/log-in",
          data
        );
        console.log(resp);
        setData({
          username: "",
          password: "",
        });
        localStorage.setItem("id", resp.data.id);
        localStorage.setItem("token", resp.data.token);
        dispatch(authActions.login());
        history("/");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  if (isLoggedIn === true) {
    history("/");
  }
  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="p-4 w-2/6 rounded bg-gray-800">
        <div className="text-2xl font-semibold">Login</div>
        <input
          type="username"
          name="username"
          placeholder="username"
          className="px-3 py-2 my-3 bg-gray-700 w-full rounded"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-3 py-2 my-3 bg-gray-700 w-full rounded"
          onChange={handleChange}
          value={data.password}
        />
        <div className="w-full flex justify-between items-center">
          <button
            className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded "
            onClick={handleSubmit}
          >
            Login
          </button>
          <Link
            to="/signup"
            className="p-3 text-l text-gray-400 hover:text-gray-200"
          >
            Don't have an account? Signup Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
