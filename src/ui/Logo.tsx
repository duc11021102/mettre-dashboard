import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/booking.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
