import styled from "styled-components";

const MediaDiscover = styled.div`
  background: ${(props) => props.theme.colors.lightBlue}
    url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)${(
      props
    ) => props.mediaDiscoverSrc}");
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export { MediaDiscover };