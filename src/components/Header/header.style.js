import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const HeaderStyle = styled("header")`
  background-color: #bad647;
  margin: 0 auto;
  display: flex;
  height: 75px;
  ${media.desktop} {
    width: 1060px;
  }
  .header--logo {
    height: 100%;
  }
  .header--menuWrapper {
    display: flex;
    &__menu {
      display: block;
      text-decoration: none;
      font-size: 40px;
      line-height: 75px;
      color: #fffae1;
    }
    &__menu:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export default HeaderStyle;
