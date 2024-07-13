import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const InfoModalStyle = styled.div`
  position: fixed;
  z-index: 2000;
  ${media.desktop} {
    right: 50px;
    bottom: 50px;
    width: 400px;
  }
  ${media.mobile} {
    width: 100%;
    height: 100%;
    background-color: rgba(34, 34, 34, 0.7);
    overflow-y: auto;
    top: 0;
    left: 0;
  }
`;

export default InfoModalStyle;
