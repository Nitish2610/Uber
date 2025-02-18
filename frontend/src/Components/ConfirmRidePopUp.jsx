import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => props.setConfirmRidePopupPanel(false)}
      >
        <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h5 className="text-lg font-medium">Harshit Pathak</h5>
        </div>
        <h2 className="text-lg font-semibold">2.2 KM</h2>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">Rs 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-5"
            />
            <Link
              to="/captain-riding"
              className="w-full mt-5 flex justify-center tex-lg bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-red-600 text-lg text-whit-700 font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
