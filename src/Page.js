import React from "react";
import styled from "styled-components";

const Main = styled.main`
  margin: 3vh 5vw;
`;

const Page = ({ children }) => {
  return (
    <>
      <header>Trade Calculator</header>
      <Main>{children}</Main>
      <footer>&copy; Kyle McKee, {new Date().getFullYear()}</footer>
    </>
  );
};

export default Page;
