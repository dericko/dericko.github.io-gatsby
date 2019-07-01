import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import MediaPlayer from "../components/mediaplayer"
import Heading from "../components/heading"
import Info from "../components/info"
import About from "../components/info-about"
import SupportBanner from "../components/supportbanner"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteDescriptionQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" />
        <Heading />
        <SupportBanner />
        <Info />
        <About />
        {/* <MediaPlayer /> */}
      </Layout>
    )}
  />
)

export default IndexPage
