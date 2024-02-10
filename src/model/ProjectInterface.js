import Project from "./Project";

const projects = require("./projects.json");

export const getAllProjects = async () => {
  return projects.map((project) => {
    return new Project(
      project.id,
      project.title,
      project.cardImage,
      project.bannerImage,
      project.type,
      project.place,
      project.begin,
      project.end,
      project.summary,
      project.keySkills,
      project.company,
      project.html
    );
  });
};

export const getProjectById = async (id) => {
  const project = projects.find((project) => project.id == id);

  if (project) {
    return new Project(
      project.id,
      project.title,
      project.cardImage,
      project.bannerImage,
      project.type,
      project.place,
      project.begin,
      project.end,
      project.summary,
      project.keySkills,
      project.company,
      project.html
    );
  }

  return false;
};
