import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import {
  GridContainer,
  ProjectContainer,
  Img,
  ProjectTitle,
  ProjectLinks,
} from "./styles"
import LinkIcon from "../../components/_shared/linkIcon/LinkIcon"
import  { fetchProjects, status }  from '../../repository/actions'
import CustomText from "../../components/_shared/customText/CustomText"
import { IProjects } from "../../.."


const projects = [
  {
    title: "Portfolio",
    link: "https://github.com/grzott/portfolioPage",
    linkGitlab: "https://github.com/grzott/portfolioPage",
    imgSrc: "https://i.postimg.cc/HWJgRDMj/p1.png",
  },
  {
    title: "Aplikacja Polskie Radio Kierowców",
    link:
      "https://play.google.com/store/apps/details?id=com.pl_radiokierowcow_mobile&hl=pl&gl=US",
    imgSrc: "/p2.png",
  },
  {
    title: "Aplikacja Polskie Radio",
    link:
      "https://play.google.com/store/apps/details?id=pl.polskieradio.mobile&hl=pl&gl=US",
    imgSrc: "/p3.png",
  },
]

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
  const [projects2, setProjects2] = useState(null);
  const {fetchProjectsData} = fetchProjects(
    setProjectsResponse,
  );
  
  useEffect(() => {
    setTitle(theme.title.projects)
  }, [theme])

  useEffect(() => {
    fetchProjectsData();
  }, [])

  useEffect(() => {
    console.log('projects2',projects2)
    console.log('status', projectsResponse.status)
    console.log('res', projectsResponse.response)
  }, [projectsResponse.response])

  //set projects
  useEffect(() => {
    let checkAgain: any = 0;
    if (projectsResponse.status === status.REJECT) {
      checkAgain = setTimeout(() => {
        fetchProjectsData();
        console.log('fetching')
      }, 15000);
    }

    if (
      projectsResponse.status === status.RESOLVE &&
      projectsResponse.response
    ) {
      setProjects2(projectsResponse.response);
    }

    return () => {
      if (checkAgain) {
        clearTimeout(checkAgain);
        // cancelProjectsFetch();
      }
    };
  }, [projectsResponse]);

  if (projectsResponse.status === status.REJECT) {
    return <CustomText 
      text={'Ups coś poszło nie tak'} 
      gridArea={null}
    />;
  }

  if (projectsResponse.status === status.PENDING || !projects) {
    return (
      <CustomText 
      text={'Wczytuje'} 
      gridArea={null}
    />
    );
  }

  return (
    <GridContainer>
      <CustomTitle text={title} gridArea={null} />
      {projects2 && projects2.map((data, i) => (
        <Project
          key={i}
          title={data.title}
          link={data.link}
          linkGitlab={data.linkGitlab}
          imgSrc={data.imgSrc}
        />
      ))}
    </GridContainer>
  )
}

export default withTheme(Projects)
