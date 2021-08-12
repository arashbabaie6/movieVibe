import colors from './colors';
import device, { breakpoints } from './devices';
import { useState } from 'react';

export default () => {
  const [theme, setTheme] = useState('dark');

  return {
    colors: colors(theme),
    device: device,
    breakpoints: breakpoints,
    theme: theme,
    setTheme: setTheme,
  };
};
