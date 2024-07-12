import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const SeafoodStyle = styled.div`
  ${media.desktop} {
    width: 1080px;
    margin: 0 auto;
  }
  ${media.mobile} {
    padding: 20px 20px;
  }
  .seafood__table {
    border: 1px solid #444444;
    border-collapse: collapse;
    th,
    td {
      border: 1px solid #444444;
    }

    ${media.mobile} {
      width: 100%;
    }
    &--index {
      text-align: center;
    }
    &--name {
      text-align: center;
    }
    &--img {
      width: 64px;
      height: 64px;
    }
    &--button {
      background-color: #bad647;
      color: #fffae1;
      height: 38px;
      border: none;
    }
  }
`;

export default SeafoodStyle;
