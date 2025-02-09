import React, { useEffect, useState } from "react";
import Cards from "../Components/Home/Cards";
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from "../Components/Home/InputData";
import axios from "axios";

const AllTasks = () => {
  const [inputDiv, setInputDiv] = useState("hidden");
  const [data, setData] = useState();
  const [updatedData, setUpdatedData] = useState({
    id: "",
    title: "",
    description: "",
  });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(
        "https://kazam-ev-tech-3.onrender.com/api/v2/get-all-tasks",
        { headers }
      );
      setData(resp.data.data);
    };
    if (localStorage.getItem("id") && localStorage.getItem("token")) {
      fetchData();
    }
  });
  return (
    <>
      <div>
        <div className="w-full flex items-end justify-end  px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <IoAddCircleSharp className="text-5xl text-gray-300 hover:text-gray-100 transition-all duration-300" />
          </button>
        </div>
        {data && (
          <Cards
            home="true"
            setInputDiv={setInputDiv}
            data={data.tasks}
            setUpdatedData={setUpdatedData}
          />
        )}
      </div>
      <InputData
        inputDiv={inputDiv}
        setInputDiv={setInputDiv}
        updatedData={updatedData}
        setUpdatedData={setUpdatedData}
      />
    </>
  );
};

export default AllTasks;
