import styled from "styled-components";

const SingleWrapper = styled.div`
  position: relative;
  .cover {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.3;
    border-radius: 0;
  }
`;

const CoverContainer = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  gap: 24px;
  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr;
  }
`;
export { SingleWrapper, CoverContainer };
