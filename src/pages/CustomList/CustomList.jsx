import React from "react";
import { withRouter } from "react-router";

class CustomList extends React.PureComponent {
  state = {
    dataList: [],
  };

  componentDidMount = () => {
    const type = this.props.match.params.type;
    switch (type) {
      case "favorite":
        {
        }
        break;

      case "watch-later":
        {
        }
        break;

      default:
        break;
    }
  };

  render() {
    return <div>CL</div>;
  }
}

export default withRouter(CustomList);
