import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #00807a;
  height: 80px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  > h1 {
    color: white;
  }
`;

export const Header = ({ title }) => {
  return (
    <StyledNav>
      <h1>{title}</h1>
    </StyledNav>
  );
};

Header.defaultProps = {
  title: "Todo App",
};
