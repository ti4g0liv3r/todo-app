import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #00807a;
  height: 80px;
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  > h4 {
    color: white;
  }
`;

export const Footer = ({ title }) => {
  const date = new Date();
  return (
    <StyledFooter>
      <h4>Copyright {date.getFullYear()}</h4>
    </StyledFooter>
  );
};

Footer.defaultProps = {
  title: "Copyright",
};
