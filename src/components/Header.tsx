import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLink to="/" role="homepage">
        <h1>rebuy Marketplace</h1>
      </HeaderLink>
    </HeaderContainer>
  );
}

const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #f4f4f4;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #018790;
`;
