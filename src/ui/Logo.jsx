import { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 16rem;
  width: 22rem;
`;

function Logo() {
  const { isDarkMode } = useContext(DarkModeContext);

  const src = isDarkMode
    ? "/el-ain-sokhna-hotel-dark-logo-2.png"
    : "/el-ain-sokhna-light-logo-2.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Hotel Logo" />
    </StyledLogo>
  );
}

export default Logo;
