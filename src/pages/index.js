import React from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'gatsby-plugin-intl';

import get from 'lodash.get';

import Layout from '../components/layout';
import { PlaceholderImage } from '../components/placeholderImage';
import '../styles/index.scss';

{
  /* <FormattedMessage id="nav_2" />; */
}

const IndexPage = ({ data }) => {
  console.log(data);

  // const { img_1, img_2, img_3,img_4, img_5 } = get(data, 'allContentfulAsset.nodes');
  const { img_1, img_2, img_3, img_4, img_5 } = data;
  // console.log(imageFluid);

  return (
    <Layout>
      <div>
        <Img fixed={img_1.fixed} />
        <Img fixed={img_2.fixed} />
        <Img fixed={img_3.fixed} />
        <Img fixed={img_4.fixed} />
        <Img fixed={img_5.fixed} />
      </div>

      <div>
        <h3>
          <FormattedMessage id="home_h5" />
        </h3>
        <p>
          <FormattedMessage id="home_p1" />
        </p>
        <p>
          <FormattedMessage id="home_p2" />
        </p>
        <p>
          <FormattedMessage id="home_p3" />
        </p>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulAsset: PropTypes.object,
  }),
};

export const query = graphql`
  query MyQuery {
    img_1: contentfulAsset(title: { eq: "nikola 0" }) {
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_2: contentfulAsset(title: { eq: "nikola 1" }) {
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_3: contentfulAsset(title: { eq: "nikola 2" }) {
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_4: contentfulAsset(title: { eq: "nikola 3" }) {
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
    img_5: contentfulAsset(title: { eq: "nikola 4" }) {
      fixed(width: 275) {
        base64
        width
        height
        src
        srcSet
      }
    }
  }
`;

// export const query = graphql`
// {
//   allContentfulAsset(filter: {title: {regex: "/^nikola \\d/"}}) {
//     nodes {
//       fluid {
//         src
//       }
//     }
//   }
// }
// `;

// export const query = graphql`
// contentfulAsset(title: { eq: "nikola 0"}}) {
//   title
//   sizes(quality: 100) {
//     ...GatsbyContentfulSizes_withWebp
//   }
// }
// `;

export default IndexPage;
