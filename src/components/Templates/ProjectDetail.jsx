import React, { useState } from "react";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import { Grid } from "@mui/material";
import styled from "styled-components";
import Section from "../atoms/Section";
import { DescriptionContainer } from "./About";
import ProjectDetailCard from "../organisms/ProjectDetailCard";
import { useParams } from "react-router-dom";
import Button from "../atoms/Button";

import projectsList from "../../data";

const ProjectDetailContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 10%;

  h2 {
    margin-top: 0;
  }

  @media screen and (max-width: 500px) {
    margin-top: 15%;

    h2 {
      margin-top: 15%;
    }
  }

  @media screen and (max-width: 1200px) {
    margin-top: 20%;
  }
`;

const ProjectPreview = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: zoom-out;
`;

const PreviewImage = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 30px;
  border: 1px solid #eeeeee;

  @media screen and (max-width: 1400px) {
    width: 70%;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ProjectImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: ${(props) => props.width};
  display: ${(props) => props.display};
  margin: 2% 1% 1%;
  cursor: pointer;
  border: 1px solid #eeeeee;

  @media screen and (max-width: 900px) {
    width: 30%;
  }
`;

const ProjectLinkButtons = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const DescriptionTextContainer = styled.div`
  @media screen and (min-width: 500px) {
    padding-right: 20px;
  }
`;

const ProjectDetail = () => {
  // Get project data from projectslist using the URL param
  let pageId = useParams().id;
  let project = projectsList.find((element) => element.id === pageId);

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [cardImage, setCardImage] = useState(project.imageUrl);

  const ShowPreview = (event) => {
    setIsPreviewVisible(true);
  };

  const HidePreview = (event) => {
    if (
      event.target.id === "preview-screen" ||
      event.target.id === "preview-images" ||
      event.target.id === "preview-image"
    ) {
      setIsPreviewVisible(!isPreviewVisible);
    }
  };

  const ChangeCardImage = (image) => {
    setCardImage(image);
  };

  return (
    <>
      {isPreviewVisible && (
        <ProjectPreview
          onClick={(event) => HidePreview(event)}
          id="preview-screen"
        >
          <PreviewImage id="preview-image" src={cardImage} alt="" />
          <ProjectImages
            id="preview-images"
            onClick={(event) => HidePreview(event)}
          >
            {project.projectImages.map((image) => {
              return (
                <ProjectImage
                  width={"10%"}
                  key={image}
                  src={image}
                  onClick={() => ChangeCardImage(image)}
                ></ProjectImage>
              );
            })}
          </ProjectImages>
        </ProjectPreview>
      )}
      <ProjectDetailContainer>
        <Section>
          <Grid container spacing={0}>
            <Grid sm={12} md={6} lg={6} xl={6}>
              <DescriptionContainer>
                <Title>
                  <h2>{project.title}</h2>
                </Title>
                <DescriptionTextContainer>
                  <Text type="grey">{project.description}</Text>
                </DescriptionTextContainer>
              </DescriptionContainer>
              <ProjectLinkButtons>
                {project.gitHub && (
                  <Button
                    color="#52b3d9"
                    href={project.gitHub}
                    title="View code"
                  />
                )}
                {project.link && (
                  <Button color="#68c3a3" href={project.link} title="Preview" />
                )}
              </ProjectLinkButtons>
            </Grid>
            <Grid sm={12} md={6} lg={6} xl={6}>
              <div onClick={(event) => ShowPreview(event)}>
                <ProjectDetailCard src={cardImage} />
              </div>
              <ProjectImages>
                {project.projectImages.map((image) => {
                  let isMiniCardVisible =
                    project.projectImages.length > 1 ? "block" : "none";
                  return (
                    <ProjectImage
                      width={"20%"}
                      display={isMiniCardVisible}
                      key={image}
                      src={image}
                      onClick={() => ChangeCardImage(image)}
                    ></ProjectImage>
                  );
                })}
              </ProjectImages>
            </Grid>
          </Grid>
        </Section>
      </ProjectDetailContainer>
    </>
  );
};

export default ProjectDetail;
