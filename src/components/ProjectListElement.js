import React from "react";
import { Card, Stack } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import "../styles/ProjectListElement.css";

const ProjectListElement = ({ project }) => {
  const header = () => {
    switch (project.type) {
      case "Scolaire":
        return "Projet scolaire";
      case "Personnel":
        return "Projet personnel";
      default:
        return "Projet professionnel";
    }
  };

  const label = () => {
    switch (project.type) {
      case "Scolaire":
        return project.title;
      case "Personnel":
        return project.title;
      default:
        return project.title + " @ " + project.company;
    }
  };
  return (
    <Card>
      <Card.Header>{header()}</Card.Header>
      <Card.Img
        variant="top"
        src={project.cardImage}
        style={{ borderBottom: "thin solid var(--bs-card-border-color)" }}
      />
      <Card.Body>
        <Card.Title>{label()}</Card.Title>
        <Card.Text>{project.summary}</Card.Text>
        <Stack direction="horizontal" gap={2}>
          {project.keySkills.map((skill, i) => (
            <Badge>{skill}</Badge>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default ProjectListElement;
