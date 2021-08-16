import React from "react";
import { withRouter } from "react-router";
import { Flex } from "components";
import RenderList from './RenderList'

class CustomList extends React.PureComponent {
  render() {
    return (
      <Flex
        width="100%"
        maxWidth="1300px"
        padding="40px 0"
        flexWrap="wrap"
        flexGap="30px 30px"
      >
        <RenderList />
      </Flex>
    );
  }
}

export default withRouter(CustomList);
