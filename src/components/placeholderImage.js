import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { useStaticQuery } from 'gatsby';

export const PlaceholderImage = (props) => {
  const { width, height } = props;
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "placeholder.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div style={{ width, height, display: 'inline-block', padding: '10px' }}>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  );
};

PlaceholderImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

PlaceholderImage.defaultProps = {
  width: 'inherit',
  height: 'inherit',
};
