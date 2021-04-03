import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import {
  GridContainer,
  ProjectContainer,
  Img,
  ProjectTitle,
  ProjectLinks,
  RespContainer,
} from "./styles"
import LinkIcon from "../../components/_shared/linkIcon/LinkIcon"
import  { fetchProjects, status }  from '../../repository/actions'
import CustomText from "../../components/_shared/customText/CustomText"
import { IProjects } from "../../.."
import Loader from "react-loader-spinner";

const Project = withTheme(({ title, link, linkGitlab, imgSrc }) => {
  const [isShown, setShown] = useState(false)

  return (
    <ProjectContainer
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <ProjectTitle display={isShown ? "flex" : "none"}>{title}</ProjectTitle>
      <ProjectLinks display={isShown ? "flex" : "none"}>
        {link ? <LinkIcon size={"60px"} name="link" link={link} /> : <></>}
        {linkGitlab ? (
          <LinkIcon size={"60px"} name="gitlab" link={linkGitlab} />
        ) : (
          <> </>
        )}
      </ProjectLinks>
      {imgSrc ? (
        <Img
          opacity={isShown ? "0.1" : "1"}
          scale={isShown ? "1.2" : "1"}
          src={imgSrc}
          alt="photo"
        />
      ) : (
        <></>
      )}
    </ProjectContainer>
  )
})

const Projects = ({ theme }) => {
  const [title, setTitle] = useState("")
  const [projectsResponse, setProjectsResponse] = useState<{
    status: Number,
    response: Array<IProjects> | null,
  }>({status: status.PENDING, response: null}
    );
  const [projects, setProjects] = useState<Array<IProjects> | null>(null);
  const {fetchProjectsData} = fetchProjects(
    setProjectsResponse,
  );
  
  useEffect(() => {
    setTitle(theme.title.projects)
  }, [theme])

  useEffect(() => {
    fetchProjectsData();
  }, [])

  //set projects
  useEffect(() => {
    let checkAgain: any = 0;
    if (projectsResponse.status === status.REJECT) {
      checkAgain = setTimeout(() => {
        fetchProjectsData();
      }, 15000);
    }

    if (
      projectsResponse.status === status.RESOLVE &&
      projectsResponse.response
    ) {
      setProjects(projectsResponse.response);
    }

    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        // cancelProjectsFetch(); 
      }
    };
  }, [projectsResponse]);

  if (projectsResponse.status === status.REJECT) {
    return (
      <RespContainer>
        <CustomText 
          text={'Ups coś poszło nie tak'} 
          gridArea={null}
        />;
      </RespContainer>
    )
  }

  if (projectsResponse.status === status.PENDING || !projects) {
    return (
      <RespContainer>
        <Loader 
        type="TailSpin"
        color={theme.color.focused}
        height={100}
        width={100}
        />
      </RespContainer>
    );
  }

  return (
    <GridContainer>
      <CustomTitle text={title} gridArea={null} />
      {projects && projects.map((data, i) => (
        <Project
          key={i}
          header={data.header}
          title={data.title}
          link={data.link}
          linkGitlab={data.linkGithub}
          imgSrc={data.imgSrc}
        />
      ))}
    </GridContainer>
  )
}

export default withTheme(Projects)
