import React from 'react';
import { withTheme } from 'styled-components';
import { Text, Flex } from 'components';

const HomePage = (props) => {
  return (
    <Flex width='100%' flexDirection='column' background='lightBlue' padding ='30px 40px'>
      <Text width='100%' fontSize='title1' lineHeight='title1' color='forceWhite'>Explore in millions of movies!</Text>
    </Flex>
  );
};

export default withTheme(HomePage);
