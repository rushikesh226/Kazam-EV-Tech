import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const history = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      if (data.username === "" || data.password === "" || data.email === "") {
        alert("All fields are required");
      } else {
        const resp = await axios.post(
          "https://kazam-ev-tech-3.onrender.com/api/v1/sign-up",
          data
        );
        console.log(resp);
        setData({
          username: "",
          email: "",
          password: "",
        });
        alert(resp.data.message);
        console.log(resp);
        history("/login");
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
        <div className="text-2xl font-semibold">Signup</div>
        <input
          type="username"
          name="username"
          placeholder="username"
          className="px-3 py-2 my-3 bg-gray-700 w-full rounded"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          className="px-3 py-2 my-3 bg-gray-700 w-full rounded"
          onChange={handleChange}
          value={data.email}
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
            className="bg-blue-400 text-xl font-semibold text-black px-3 py-2 rounded"
            onClick={handleSubmit}
          >
            Signup
          </button>
          <Link
            to="/login"
            className="p-3 text-l text-gray-400 hover:text-gray-200"
          >
            Already have an account? Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
