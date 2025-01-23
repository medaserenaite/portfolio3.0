import ProjectCard from "./components/ProjectCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  
`
function App() {

  return (
    <Wrapper>
      <ProjectCard />
    </Wrapper>
  );
}

export default App;
