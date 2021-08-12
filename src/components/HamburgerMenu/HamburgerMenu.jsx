import React from "react";

const HamburgerMenu = (props) => {
  return (
    <svg {...props} style={{cursor: 'pointer'}} viewBox="0 0 100 80" width="40" height="20">
      <rect fill='#ffffff' width="100" height="20" rx='8'></rect>
      <rect fill='#ffffff' y="30" width="100" height="20" rx='8'></rect>
      <rect fill='#ffffff' y="60" width="100" height="20" rx='8'></rect>
    </svg>
  );
};

export default HamburgerMenu;
