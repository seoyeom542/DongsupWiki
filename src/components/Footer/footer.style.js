import styled from "@emotion/styled";
import media from "@shared/mediaQuery";

const FooterStyle = styled.div`
  height: 48px;
  border-topp: solid 1px #bad647;
  ${media.mobile} {
    padding: 20px 20px;
  }
`;

export default FooterStyle;
