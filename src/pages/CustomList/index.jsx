import React from "react";
import { withRouter } from "react-router";
import { Flex } from "components";
import RenderList from "./RenderList";

class CustomList extends React.PureComponent {
  render() {
    const { type: listType } = this.props.match.params;
    console.log();
    return (
      <Flex
        width="100%"
        maxWidth="1300px"
        padding="40px 0"
        flexWrap="wrap"
        flexGap="30px 30px"
      >
        <RenderList listType={listType} />
      </Flex>
    );
  }
}

export default withRouter(CustomList);
