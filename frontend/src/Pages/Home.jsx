import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vechiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vechiclePanel, setVechiclePanel] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          //  opacity: 1,
          padding: "24px",
          duration: 0.5,
        });
        gsap.to(panelCloseRef.current, { opacity: 1 });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          // opacity: 0
          padding: "0px",
        });
        gsap.to(panelCloseRef.current, { opacity: 0 });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vechiclePanel) {
        gsap.to(vechiclePanelRef.current, { transform: "translateY(0%)" });
      } else {
        gsap.to(vechiclePanelRef.current, { transform: "translateY(100%)" });
      }
    },
    [vechiclePanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-5 left-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* Image for Temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="bg-white h-[30%] p-6 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submithandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-[0]">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVechiclePanel={setVechiclePanel}
          />
        </div>
      </div>
      <div
        ref={vechiclePanelRef}
        className="fixed z-10 w-full bottom-0 bg-white px-3 py-10 pt-14 translate-y-full"
      >
        <h5
          className="p-1 text-center w-[93%] absolute top-0"
          onClick={() => setVechiclePanel(false)}
        >
          <i className="text-3xl text-gray-600 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a Vechicle</h3>
        <div className="flex items-center w-full justify-between mb-3 p-3 border-2 active:border-black rounded-xl">
          <img
            className="h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3T6g2Q-aLZNX8NdkagbSOvRVPlCuru6YKaLWOF5UGJdNj2jUIOTBfEQ&s"
            alt=""
          />
          <div className="ml-2 w-[1/2]">
            <h4 className="font-medium text-base">
              Uber Go
              <span>
                <i className="ri-user-3-fill">4</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">Rs 193</h2>
        </div>
        <div className="flex items-center w-full justify-between mb-3 p-3 border-2 active:border-black rounded-xl">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-[1/2]">
            <h4 className="font-medium text-base">
              Moto
              <span>
                <i className="ri-user-3-fill">1</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, motor rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">Rs 65</h2>
        </div>
        <div className="flex items-center w-full justify-between mb-3 p-3 border-2 active:border-black rounded-xl">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-[1/2]">
            <h4 className="font-medium text-base">
              Uber Auto
              <span>
                <i className="ri-user-3-fill">3</i>
              </span>
            </h4>
            <h5 className="font-medium text-sm">4 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">Rs 118</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
