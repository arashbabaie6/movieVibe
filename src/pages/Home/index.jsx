import React from "react";
import { withRouter } from "react-router";
import { Text, Flex, Carousel, SearchInput } from "components";
import { MediaDiscover } from "./home-page.style";
import { axios, debounce } from "helpers";

function generateMediaDiscoverSrc(listOfMovies) {
  const randomNumber = Math.ceil(Math.random() * (listOfMovies.length - 1));
  return listOfMovies[randomNumber].poster_path;
}

class HomePage extends React.PureComponent {
  state = {
    mediaDiscoverSrc: null,
    fetchingPopular: true,
    popularData: null,
    value: "",
    searchResult: null,
    fetchingSearch: false,
  };

  handleSearchMovie = debounce(() => {
    const { value } = this.state;
    if (value?.length > 2) {
      this.setState({ fetchingSearch: true });
      axios()
        .get(`/search/movie?query=${value}`)
        .then((res) => {
          this.setState({
            searchResult: res.data.results,
          });
        })
        .catch((err) => console.log({ err }))
        .finally(() => this.setState({ fetchingSearch: false }));
    }
  });

  componentDidMount = () => {
    axios()
      .get("/movie/popular")
      .then((res) => {
        const src = generateMediaDiscoverSrc(res.data.results);
        this.setState({ popularData: res.data.results, mediaDiscoverSrc: src });
      })
      .catch((err) => console.log({ err }))
      .finally(() => this.setState({ fetchingPopular: false }));
  };

  handleSearch = (value) => {
    if (value?.length <= 2) {
      this.setState({ value, searchResult: null });
    } else {
      this.setState({ value }, () => this.handleSearchMovie());
    }
  };

  handleSubmit = () => {
    const { value } = this.state;
    this.props.history.push(`/movies/${value}`);
  };

  render() {
    const {
      mediaDiscoverSrc,
      fetchingPopular,
      popularData,
      searchResult,
      fetchingSearch,
    } = this.state;
    return (
      <Flex width="100%" maxWidth="1300px" flexDirection="column">
        <MediaDiscover
          as={Flex}
          width="100%"
          flexDirection="column"
          background="lightBlue"
          padding="30px 40px"
          position="relative"
          height="360px"
          mediaDiscoverSrc={mediaDiscoverSrc}
          borderRadius="0 0 8px 8px"
        >
          <Text
            width="100%"
            fontSize="title1"
            lineHeight="title1"
            color="forceWhite"
          >
            Explore in millions of movies!
          </Text>
          <SearchInput
            onChange={this.handleSearch}
            data={searchResult}
            fetchingData={fetchingSearch}
            onSubmit={this.handleSubmit}
          />
        </MediaDiscover>

        <Flex width="100%" padding="0 40px">
          <Carousel
            title="Popular movies"
            data={popularData}
            fetching={fetchingPopular}
          />
        </Flex>
      </Flex>
    );
  }
}

export default withRouter(HomePage);
