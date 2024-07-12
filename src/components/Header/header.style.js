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
    ${media.mobile} {
      padding: 20px 20px;
    }
    &--logo {
      ${media.desktop} {
        height: 100%;
      }
      ${media.mobile} {
        text-align: center;
        height: 100px;
      }
    }
    &--menuWrapper {
      display: flex;
      ${media.mobile} {
        margin-top: 20px;
        justify-content: space-between;
      }
      &__menu {
        color: #fffae1;
        display: block;
        text-decoration: none;
        ${media.desktop} {
          line-height: 75px;
          font-size: 40px;
        }
        ${media.mobile} {
          font-size: 28px;
        }
      }
      &__menu:not(:last-child) {
        ${media.desktop} {
          margin-right: 20px;
        }
      }
    }
  }
`;

export default HeaderStyle;
