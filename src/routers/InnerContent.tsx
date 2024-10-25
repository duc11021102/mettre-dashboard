import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr; // fisrt column = 26 rem, second column = occupy the remaining space by value
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  /* overflow: scroll; */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const InnerContent = () => {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default InnerContent;
