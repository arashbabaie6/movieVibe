import React from 'react';
import { withTheme } from 'styled-components';
import { Text, Flex } from 'components';

const MainPage = (props) => {
  return (
    <Flex width='100%' flexDirection='column'>
      <Text>Main page</Text>
    </Flex>
  );
};

export default withTheme(MainPage);
