import React from "react";
export const DEFlag = ({ width = "640px", height = "480px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      width={width}
      height={height}
    >
      <rect width="600" height="400" fill="#ED2939" />
      <rect width="400" height="400" fill="#FFF" />
      <rect width="200" height="400" fill="#002395" />
    </svg>
  );
};
