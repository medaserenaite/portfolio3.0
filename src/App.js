import styled from "styled-components";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";

const Wrapper = styled.div``

function App() {
  return (
    <Wrapper>
      <Section>
       <ProjectCard />
      </Section>
    </Wrapper>
  );
}

export default App;
