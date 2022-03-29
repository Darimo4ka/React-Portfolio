
import React from "react";
import {
  Card,
  Icon,
  Button,
  Container,
  Header,
  Segment,
} from "semantic-ui-react";

const projectData = [
  {
    image: "images/social-API.png",
    title: "Note Taker",
    description: "This note taker .",
    link: "",
  },
  {
    image: "images/social-API.png",
    title: "Employee Tracker",
    description: "A CLI application.",
    link: "https://drive.google.com/file/d/1E72jLknL85L6L-rikYwxGVUtO33PjUVQ/view?usp=sharing",
  },
  {
    image: "images/social-API.png",
    title: "Social Network API",
    description: "A social network api ",
    link: "https://drive.google.com/file/d/1Uvp_OAmdJEOOSLkN3mXKFUt62scQ6s5n/view?usp=sharing",
  },
];

const extra = (link) => (
  <a href={link} target="_blank" rel="noreferrer">
    <Button basic attached="bottom" color="violet" content="View Project" />
  </a>
);

const MyProjects = () => {
  return (
    <Container>
      <Segment basic textAlign="center">
        <Header color="violet" as="h1">
          <Header.Content>
            <Icon name="cubes" />
            Projects
          </Header.Content>
        </Header>
      </Segment>
      <>
        {projectData.map((project, i) => (
          <Card
            fluid
            key={i}
            image={process.env.PUBLIC_URL + `${project.image}`}
            header={project.title}
            description={project.description}
            extra={extra(project.link)}
          />
        ))}
      </>
    </Container>
  );
};

export default MyProjects;
