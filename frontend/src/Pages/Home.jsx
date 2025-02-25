import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VechiclePanel from "../Components/VechiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vechiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vechicleFoundRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [vechiclePanel, setVechiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vechicleFound, setVechicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

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

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, { transform: "translateY(0%)" });
      } else {
        gsap.to(confirmRidePanelRef.current, { transform: "translateY(100%)" });
      }
    },
    [confirmRidePanel]
  );
  useGSAP(
    function () {
      if (vechicleFound) {
        gsap.to(vechicleFoundRef.current, { transform: "translateY(0%)" });
      } else {
        gsap.to(vechicleFoundRef.current, { transform: "translateY(100%)" });
      }
    },
    [vechicleFound]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(0%)" });
      } else {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(100%)" });
      }
    },
    [waitingForDriver]
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
        className="fixed z-10 w-full bottom-0 bg-white px-3 py-10 pt-12 translate-y-full"
      >
        <VechiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVechiclePanel={setVechiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 w-full bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVechicleFound={setVechicleFound}
        />
      </div>
      <div
        ref={vechicleFoundRef}
        className="fixed z-10 w-full bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <LookingForDriver setVechicleFound={setVechicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 w-full bottom-0 bg-white px-3 py-6 pt-12 translate-y-full"
      >
        <WaitingForDriver waitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
