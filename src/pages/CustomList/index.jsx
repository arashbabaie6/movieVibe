import React from "react";
import { withRouter } from "react-router";
import { Flex, Text, MovieCard } from "components";
import { LS } from "helpers";

class CustomList extends React.PureComponent {
  state = {
    dataList: [],
  };

  generateList = () => {
    const type = this.props.match.params.type;
    let list = [];
    switch (type) {
      case "favorites":
        {
          list = LS.readFromStorage("fav");
        }
        break;

      case "watch-later":
        {
          list = LS.readFromStorage("wl");
        }
        break;

      default:
        list = [];
        break;
    }
    this.setState({ dataList: list });
  };

  componentDidMount = () => {
    this.generateList();
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      this.generateList();
    }
  };

  render() {
    const { dataList } = this.state;
    return (
      <Flex
        width="100%"
        maxWidth="1300px"
        padding="40px 0"
        flexWrap="wrap"
        flexGap="30px 30px"
      >
        {!!dataList?.length ? (
          dataList.map((item) => <MovieCard key={item.id} data={item} />)
        ) : (
          <Text>The list is empty!</Text>
        )}
      </Flex>
    );
  }
}

export default withRouter(CustomList);
