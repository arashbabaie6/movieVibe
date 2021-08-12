import React from 'react';
import { withTheme } from 'styled-components';
import { Text, Flex } from 'components';

// assets
import DarkIcon from 'assets/images/theme-dark-icon.svg';
import LightIcon from 'assets/images/theme-light-icon.svg';

const MainPage = (props) => {
  const { theme, setTheme } = props.theme;

  return (
    <Flex width='100%' flexDirection='column'>
      <Flex width='100%' justifyContent='flex-start' padding='16px'>
        {theme === 'dark' && (
          <img
            src={LightIcon}
            width='64px'
            height='64px'
            className='pointer'
            onClick={() => setTheme('light')}
          />
        )}
        {theme === 'light' && (
          <img
            src={DarkIcon}
            width='64px'
            height='64px'
            className='pointer'
            onClick={() => setTheme('dark')}
          />
        )}
      </Flex>
      <Text>Main page</Text>
    </Flex>
  );
};

export default withTheme(MainPage);
