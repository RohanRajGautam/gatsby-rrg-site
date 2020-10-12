import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h2>Hi !</h2>
            <div className="underline"></div>
            <h1>i'm rohan</h1>
            <h4>a passionate web developer</h4>
            <Link to="/contact" className="btn">
              hire me
            </Link>
            <Link to="/cv" className="btn">
              See CV
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image objectFit="cover" fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
