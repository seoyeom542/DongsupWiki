import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const HeaderStyle = styled("header")`
  background-color: #bad647;
  .header {
    ${media.desktop} {
      height: 75px;
      display: flex;
      width: 1060px;
      margin: 0 auto;
    }
    &--logo {
      height: 100%;
    }
    &--menuWrapper {
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
  }
`;

export default HeaderStyle;
