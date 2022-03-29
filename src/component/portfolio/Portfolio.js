
import React from "react";
import {
  Card,
  Icon,
  Button,
  Container,
  Header,
  Segment,
} from "semantic-ui-react";
// import { Link } from "react-router-dom";
import "./project.css";
const projectData = [
  {
    image: "images/note-taker.png",
    title: "Note Taker",
    description: "This note taker .",
    link: "https://thawing-basin-33158.herokuapp.com/",
    repo: "https://github.com/Darimo4ka/Note-Taker",
  },
  {
    image: "images/cli.png",
    title: "Employee Tracker",
    description: "A CLI application.",
    link: "https://drive.google.com/file/d/1E72jLknL85L6L-rikYwxGVUtO33PjUVQ/view?usp=sharing",
    repo: "https://github.com/Darimo4ka/Employee-Tracker",
  },
  {
    image: "images/Social-API.png",
    title: "Social Network API",
    description: "A social network api ",
    link: "https://drive.google.com/file/d/1Uvp_OAmdJEOOSLkN3mXKFUt62scQ6s5n/view?usp=sharing",
    repo: "https://github.com/Darimo4ka/NoSQL-Social-Network-API",
  },
];

const extra = (link, repo) => (
  <>
    <a href={link}>
      <Button basic attached="bottom" color="violet" content="View Project" />
    </a>

    <a href={repo}>
      <Button basic attached="bottom" color="violet" content="View Repo" />
    </a>
  </>
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
            image={project.image}
            header={project.title}
            description={project.description}
            extra={extra(project.link, project.repo)}
          />
        ))}
      </>
    </Container>
  );
};

export default MyProjects;
