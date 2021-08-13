import React from "react";
import { Flex, Image, Loading, Text, Box } from "components";
import { withRouter } from "react-router";
import { axios } from "helpers";
import { SingleWrapper, CoverContainer } from "./single-movie.style";

class SingleMoviePage extends React.PureComponent {
  state = {
    movieData: null,
    fetching: true,
    videos: [],
  };

  componentDidMount = () => {
    const movieId = this.props.match.params.id;

    axios()
      .get(`movie/${movieId}/videos`)
      .then((res) => {
        const videosList = res.data.results.filter(
          (vid) => vid.type === "Trailer"
        );
        console.log({ videosList });
        this.setState({ videos: videosList });
      })
      .catch((err) => console.log({ err }));

    axios()
      .get(`/movie/${movieId}`)
      .then((res) => {
        console.log({ res });
        this.setState({ movieData: res.data });
      })
      .catch((err) => console.log({ err }))
      .finally(() => this.setState({ fetching: false }));
  };

  render() {
    const { movieData, fetching, videos } = this.state;
    return (
      <SingleWrapper as={Flex} width="100%" padding="16px">
        {!!movieData && (
          <Image
            borderRadius="0"
            className="cover"
            width="100%"
            height="482px"
            src={movieData?.poster_path}
            imageSize="w1920_and_h800_multi_faces"
          />
        )}
        {fetching ? (
          <Loading />
        ) : (
          !!movieData && (
            <CoverContainer
              as={Box}
              width="100%"
              maxWidth="1300px"
              style={{ zIndex: 1 }}
            >
              <Image
                width="300px"
                height="450px"
                src={movieData?.poster_path}
                imageSize="w600_and_h900_bestv2"
              />
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                flexGap="8px 0"
              >
                <Text fontSize="title1" lineHeight="title1">
                  {movieData?.title}
                </Text>
                <Flex flexGap="4px 4px" flexWrap="wrap">
                  <Text>{movieData?.release_date}</Text>|
                  <Text>({movieData?.original_language.toUpperCase()})</Text>|
                  <Flex flexWrap="wrap">
                    {movieData?.genres?.map((genre, index) => (
                      <Text key={genre.id}>
                        {`${genre.name}${
                          movieData?.genres.length - 1 !== index ? "," : ""
                        }`}
                        &nbsp;
                      </Text>
                    ))}
                  </Flex>
                  <Flex
                    width="38px"
                    height="38px"
                    background="accent"
                    borderRadius="19px"
                  >
                    <Text
                      color={
                        movieData?.vote_average > 7.5
                          ? "green"
                          : movieData?.vote_average > 6.0
                          ? "yellow"
                          : "red"
                      }
                      weight="bold"
                    >
                      {movieData?.vote_average}
                    </Text>
                  </Flex>
                </Flex>
                <Flex flexDirection="column" alignItems="flex-start">
                  <Text weight="bold" fontSize="title4" lineHieght="title4">
                    Overview
                  </Text>
                  <Text>{movieData?.overview}</Text>
                </Flex>
                <Flex flexGap="0 8px" flexWrap="wrap">
                  {!!videos?.length &&
                    videos.map((vid) => (
                      <Flex position="relative" key={vid.id}>
                        <iframe
                          width="86"
                          height="86"
                          src={`https://www.youtube.com/embed/${vid.key}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                        <Flex
                          position="absolute"
                          width="100%"
                          height="100%"
                          style={{
                            opacity: 0.1,
                            top: 0,
                            left: 0,
                            cursor: "pointer",
                          }}
                          onClick={() => console.log("tada")}
                        />
                      </Flex>
                    ))}
                </Flex>
              </Flex>
            </CoverContainer>
          )
        )}
      </SingleWrapper>
    );
  }
}

export default withRouter(SingleMoviePage);
