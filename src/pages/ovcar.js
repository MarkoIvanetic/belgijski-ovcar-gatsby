import React from 'react';
// import { Link, graphql } from "gatsby"
import '../styles/index.scss';
import Layout from '../components/layout';

import { PlaceholderImage } from '../components/placeholderImage';
import { FormattedMessage } from 'gatsby-plugin-intl';

const About = ({ data }) => {
  return (
    <Layout>
      <div>
        <PlaceholderImage width="100%" />
      </div>

      <div>
        <h5>
          <FormattedMessage id="ovcar_h5" />
        </h5>
        <p>
          <FormattedMessage id="ovcar_p1" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p2" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p3" />
        </p>
        <p>
          <FormattedMessage id="ovcar_p4" />
        </p>
      </div>
    </Layout>
  );
};

export default About;

// export const query = graphql`
//   query BlogPostsPageQuery {
//     allContentfulBlogPost(limit: 1000) {
//       totalCount
//       edges {
//         node {
//           id
//           title
//           slug
//         }
//       }
//     }
//   }
// `
