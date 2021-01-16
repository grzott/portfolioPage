import React, { useState, useEffect } from "react"
import { withTheme } from "styled-components"
import CustomTitle from "../../components/_shared/customTitle/CustomTitle"
import {
  GridContainer,
  ProjectContainer,
  Img,
  ProjectTitle,
  ProjectLinks
} from "./styles"
import CustomIcon from "../../components/_shared/customIcon/CustomIcon"

const projects = [
  {
    'title': 'Portfolio',
    'link': 'https://www.google.pl',
    'gitlabLink': 'https://www.joemonster.org',
    'imgSrc': '/p1.png'
  },
  {
    'title': 'Aplikacja Polskie Radio Kierowców',
    'link': 'link2',
    'linkGitlab': 'link2',
    'imgSrc': '/p2.png'
  },
  {
    'title': 'Pprojekt3',
    'link': 'link3',
    'linkGitlab': 'link3',
    'imgSrc': ''
  },

]

const Project = withTheme(({ title, link, imgSrc, linkGitlab }) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectLinks>
        <CustomIcon name='link' link={link} />
        <CustomIcon name='github' link={link} linkGitlab={linkGitlab} />
      </ProjectLinks>
      <Img src={imgSrc} alt='photo' />
    </ProjectContainer>

  )
})

const DesktopProjects = ({ theme }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle(theme.lang.title.projects)
  }, [theme])

  return (
    <GridContainer>
      <CustomTitle text={title} />
      {
        projects.map((data, i) =>
          <Project
            key={i}
            title={data.title}
            link={data.link}
            gitlabLink={data.gitlabLink}
            imgSrc={data.imgSrc} />)
      }
    </GridContainer>
  )
}

export default withTheme(DesktopProjects)

