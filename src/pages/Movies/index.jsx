import React from "react";
import { withRouter } from "react-router";
import { Flex, MovieCard, Loading, Text } from "components";
import { axios } from "helpers";

class MoviesPage extends React.PureComponent {
  state = {
    searchResult: [],
    fetchingMovies: true,
    currentPage: 1,
    totalPage: 1,
    loadMoreFetching: false,
  };

  componentDidMount = () => {
    this.handleLoadMovies()
      .then((res) => {
        this.setState({
          searchResult: [...this.state.searchResult, ...res.data.results],
          currentPage: res.data.page,
          totalPage: res.data.total_pages,
        });
      })
      .catch((err) => console.log({ err }))
      .finally(() => this.setState({ fetchingMovies: false }));
  };

  handleLoadMovies = (page = 1) => {
    const searchQuery = this.props.match.params.search;
    return axios().get(`/search/movie?query=${searchQuery}&page=${page}`);
  };

  handleLoadMore = () => {
    const { currentPage } = this.state;
    this.setState({ loadMoreFetching: true });
    this.handleLoadMovies(currentPage + 1)
      .then((res) => {
        this.setState({
          searchResult: [...this.state.searchResult, ...res.data.results],
          currentPage: res.data.page,
          totalPage: res.data.total_pages,
        });
      })
      .catch((err) => console.log({ err }))
      .finally(() => this.setState({ loadMoreFetching: false }));
  };

  render() {
    const {
      searchResult,
      fetchingMovies,
      currentPage,
      totalPage,
      loadMoreFetching,
    } = this.state;
    return (
      <Flex
        width="100%"
        maxWidth="1300px"
        flexDirection="column"
        padding="40px 0"
      >
        <Flex width="100%" flexWrap="wrap" flexGap="30px 30px">
          {fetchingMovies ? (
            <Loading />
          ) : (
            !!searchResult?.length &&
            searchResult.map((item) => <MovieCard key={item.id} data={item} />)
          )}
        </Flex>
        {loadMoreFetching ? (
          <Loading size={18} />
        ) : (
          currentPage < totalPage && (
            <Flex
              width="150px"
              background="accent"
              marginTop="40px"
              borderRadius="8px"
              onClick={() => this.handleLoadMore()}
              style={{cursor: 'pointer'}}
            >
              <Text weight="bold" color="forceWhite">
                Load more
              </Text>
            </Flex>
          )
        )}
      </Flex>
    );
  }
}

export default withRouter(MoviesPage);
