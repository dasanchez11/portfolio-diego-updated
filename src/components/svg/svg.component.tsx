import React from "react";

const SVG = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="100px"
        width="100px"
      >
        <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
        <g transform="translate(0,0)">
          <path
            d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
            fill="#fff"
            fill-opacity="1"
          ></path>
        </g>
      </svg>
    </>
  );
};

export default SVG;
