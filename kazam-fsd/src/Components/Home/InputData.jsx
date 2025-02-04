import React from "react";
import { RxCross2 } from "react-icons/rx";
const InputData = ({inputDiv,setInputDiv}) => {
  return (
    <>
      <div className={`${inputDiv} top-0 left-0 bg-gray-800 opacity-50 h-screen w-full`}></div>
      <div className={`${inputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-3/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={()=>setInputDiv("hidden")}>
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Title"
            className="px-2 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            name="description"
            className="px-2 py-2 rounded w-full bg-gray-700 my-3"
            cols="30"
            rows="10"
            placeholder="Enter Description"
          ></textarea>
          <button className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
