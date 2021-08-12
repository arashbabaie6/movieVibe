const colors = (theme) => ({
  white: theme === 'dark' ? '#FFFFFF' : '#000000',
  gray1: theme === 'dark' ? '#6D728B' : '#6C6C6C',
  gray2: theme === 'dark' ? '#1C2035' : '#EDEDED',
  gray3: theme === 'dark' ? '#343C65' : '#B2B2B5',
  black: theme === 'dark' ? '#0F121F' : '#F5F5F5',
  accent: '#3950FD',
  forceWhite: '#FFFFFF',
  green: '#39D98A',
  darkGreen: '#20A965',
  red: '#FF5C5C',
  darkRed: '#E70000',
  orange: '#FDAC42',
  darkOrange: '#E78402',
  darkBlue: '#161d56',
});

export default colors;
