export const breakpoints = {
  mobile: "425px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

const devices = {
  mobile: `only screen and (max-width: ${breakpoints.mobile})`,
  tablet: `only screen and (max-width: ${breakpoints.tablet})`,
  laptop: `only screen and (max-width: ${breakpoints.laptop})`,
  desktop: `only screen and (max-width: ${breakpoints.desktop})`,
  mobileMin: `only screen and (min-width: ${breakpoints.mobile})`,
  tabletMin: `only screen and (min-width: ${breakpoints.tablet})`,
  laptopMin: `only screen and (min-width: ${breakpoints.laptop})`,
};

export default devices;
