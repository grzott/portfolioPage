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

const projects = [
  {
    title: "Portfolio",
    link: "https://gitlab.com/grzott/go-portfolio",
    linkGitlab: "https://gitlab.com/grzott/go-portfolio",
    imgSrc: "/p1.png",
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

  useEffect(() => {
    setTitle(theme.lang.title.projects)
  }, [theme])

  return (
    <GridContainer>
      <CustomTitle text={title} />
      {projects.map((data, i) => (
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
