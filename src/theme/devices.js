export const breakpoints = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',

  getSizeNumber: (size) => {
    switch (size) {
      case 'mobile':
        return 425;
      case 'tablet':
        return 768;
      case 'laptop':
        return 1024;
      case 'desktop':
        return 1440;
      default:
        return '100%';
    }
  },
};

const devices = {
  mobile: `only screen and (max-width: ${breakpoints.mobile})`,
  tablet: `only screen and (max-width: ${breakpoints.tablet})`,
  laptop: `only screen and (max-width: ${breakpoints.laptop})`,
  desktop: `only screen and (max-width: ${breakpoints.desktop})`,
  mobileMin: `only screen and (min-width: ${breakpoints.mobile})`,
  tabletMin: `only screen and (min-width: ${breakpoints.tablet})`,
  laptopMin: `only screen and (min-width: ${breakpoints.laptop})`,
  desktopMin: `only screen and (min-width: ${
    breakpoints.getSizeNumber('desktop') + 1
  }px)`,
};

export default devices;
