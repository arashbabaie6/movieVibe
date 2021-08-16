import React from "react";
import { Flex, Image, Loading, Text, Box } from "components";
import { withRouter } from "react-router";
import { api, errorHelper } from "helpers";
import { SingleWrapper, CoverContainer } from "./single-movie.style";
import Modal from "react-modal";
import closeIcon from "public/images/close-icon.svg";
import MovieCard from "../../components/MovieCard/MovieCard";

Modal.setAppElement(SingleMoviePage);
class SingleMoviePage extends React.PureComponent {
  state = {
    movieData: null,
    fetching: true,
    videos: [],
    modalOpen: false,
    videoKey: null,
  };

  componentDidMount = () => {
    const movieId = this.props.match.params.id;

    api
      .getMovieTrailers(movieId)
      .then((res) => {
        const videosList = res.data.results.filter(
          (vid) => vid.type === "Trailer"
        );
        this.setState({ videos: videosList });
      })
      .catch(errorHelper);

    api
      .getMovie(movieId)
      .then((res) => {
        this.setState({ movieData: res.data });
      })
      .catch(errorHelper)
      .finally(() => this.setState({ fetching: false }));
  };

  handleOpenModal = (videoKey) => {
    this.setState({ videoKey, modalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { movieData, fetching, videos, modalOpen, videoKey } = this.state;
    return (
      <SingleWrapper as={Flex} width="100%" padding="16px">
        {!!movieData && (
          <Image
            borderRadius="0"
            className="cover"
            width="100%"
            height="490px"
            src={movieData?.poster_path || ""}
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
              <Flex justifyContent="center">
                <MovieCard
                  data={movieData}
                  imageWidth="300px"
                  imageHeight="450px"
                  imageSize="w600_and_h900_bestv2"
                />
              </Flex>
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
                    {movieData?.genres?.map((genre, index, genres) => (
                      <Text key={genre.id}>
                        {`${genre.name}${
                          genres.length - 1 !== index ? "," : ""
                        }`}
                        &nbsp;
                      </Text>
                    ))}
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
                          onClick={() => this.handleOpenModal(vid.key)}
                        />
                      </Flex>
                    ))}
                </Flex>
              </Flex>
            </CoverContainer>
          )
        )}

        <Modal
          isOpen={modalOpen}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
        >
          {!!videoKey && (
            <Flex
              width="100%"
              height="100%"
              flexDirection="column"
              alignItems="flex-start"
            >
              <img
                src={closeIcon}
                width="24px"
                height="24px"
                onClick={this.handleCloseModal}
                style={{ cursor: "pointer", marginBottom: 10 }}
              />
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoKey}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </Flex>
          )}
        </Modal>
      </SingleWrapper>
    );
  }
}

export default withRouter(SingleMoviePage);
