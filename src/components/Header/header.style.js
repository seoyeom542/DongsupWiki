import styled from "@emotion/styled";

const HeaderStyle = styled("header")`
  background-color: #bad647;
  width: 1060px;
  margin: 0 auto;
  display: flex;
  height: 75px;
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
