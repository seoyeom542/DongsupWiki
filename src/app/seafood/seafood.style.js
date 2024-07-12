import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const SeafoodStyle = styled.div`
  ${media.desktop} {
    width: 1080px;
    margin: 0 auto;
  }
  .seafood__table {
    &--img {
      width: 64px;
      height: 64px;
    }
  }
`;

export default SeafoodStyle;
