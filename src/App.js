import styled from "styled-components";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ThemeToggle from "./components/ThemeToggle";

const Wrapper = styled.div``

const App = () => {
  
  return (
    <Wrapper>
      <ThemeToggle />
      <Section>
       <ProjectCard />
      </Section>
    </Wrapper>
  );
}

export default App;
