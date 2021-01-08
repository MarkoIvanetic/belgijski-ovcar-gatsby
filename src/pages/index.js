import React from "react"
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "metadata_title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h1>
        <FormattedMessage id="nav_0" />
      </h1>
      <p>
        <FormattedMessage id="nav_1" />
      </p>
      <p>
        <FormattedMessage id="nav_2" />
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/blog/">
        <FormattedMessage id="nav_2" />
      </Link>
    </Layout>
  )
}

export default IndexPage
