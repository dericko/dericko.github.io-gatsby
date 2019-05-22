import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
    <p>Hmm, we can&#39;t find the page you&#39;re looking for...</p>
  </Layout>
)

export default NotFoundPage
