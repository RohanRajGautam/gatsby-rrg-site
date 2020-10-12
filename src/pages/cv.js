import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"
import SEO from "../components/SEO"
import { withPrefix } from 'gatsby'

const Cv = () => {

  return (
    <Layout>
      <SEO title="CV" description="resume of rohan raj gautam" />
      <section className="cv-page projects">
        <article className="cv">
            <Title title="Preview of my CV" />
            <a download="rohan_cv.pdf" className="btn" href={withPrefix('/rohan_cv.pdf')} rel="noopener noreferrer">
                Download
            </a>
            <iframe title="cv" style={{width: '60%', height: '800px', marginTop:'2rem'}} src={withPrefix('/rohan_cv.pdf')}>
            </iframe>
        </article>
      </section>
    </Layout>
  )
}

export default Cv
