import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "24B, Near Kapoor Cafe, Sheriyans Coding School,Bhopal",
    "22C, Near Sharma Cafe, Sheriyans Coding School,Bhopal",
    "20A, Near Malhotra Cafe, Sheriyans Coding School,Bhopal",
    "18B, Near Singhania Cafe, Sheriyans Coding School,Bhopal",
  ];
  return (
    <div>
      {/* this is just sample data */}
      {locations.map((location, index) => {
        return (
          <div
            onClick={() => {
              props.setVechiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex border-2 p-3 rounded-xl border-gray-50 active:border-black gap-4 my-2 items-center justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
