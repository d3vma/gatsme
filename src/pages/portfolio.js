import * as React from "react"
import { graphql } from "gatsby"
import { Card } from "react-bootstrap"
import resume from "../../content/resume"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PortfolioIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  console.log(resume)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      
      <ol style={{ listStyle: `none` }}>
        <h2>{resume.fullname} - {resume.role}</h2>
        <p>{resume.summary}</p>
        <hr />
        <div>
          <h4>Experience</h4>
          {resume.experience.map(experience => {
            return (
              <li key={experience.role}>
                <Card>
                  <Card.Body>
                    <Card.Title>{experience.company}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{experience.role}</Card.Subtitle>
                    <Card.Text className="mb-2 mt-2">
                      {experience.start} - {experience.end ? experience.end : 'Present'}
                    </Card.Text>
                    <Card.Text 
                      dangerouslySetInnerHTML={{
                        __html: experience.description,
                      }}
                      itemProp="description"  
                    />
                  </Card.Body>
                </Card>
              </li>
            )
          })}
        </div>
        <div>
          <h4>Skills</h4>
          {resume.skills.map(skill => {
            return (
              <li key={skill.name}>
                - {skill.name}
              </li>
            )
          })}
        </div>
      </ol>
    </Layout>
  )
}

export default PortfolioIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
