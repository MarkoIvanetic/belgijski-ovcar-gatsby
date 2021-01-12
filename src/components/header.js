import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styles from './style/header.module.scss';

import Language from './language';
import { Navigation } from './navigation';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dogbanner.png" }) {
        childImageSharp {
          fixed(width: 120, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/">
            <Img style={{ margin: '10px 10px 0px 10px' }} loading="eager" fixed={data.file.childImageSharp.fixed} />
          </Link>
        </div>
        <div className={styles.title}>
          <Link to="/">
            <h1>{siteTitle}</h1>
            <h2>{siteTitle}</h2>
          </Link>
        </div>
      </div>

      <Language />
      <Navigation />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
