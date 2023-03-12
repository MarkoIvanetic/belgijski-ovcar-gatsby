import { Link } from 'gatsby-plugin-intl';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styles from './style/header.module.scss';

import Language from './language';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Navigation } from './navigation';

const MenuIcon = ({ onToggleMenu }) => (
  <div className={styles.menuIcon} onClick={onToggleMenu}>
    <svg viewBox="0 0 100 80" width="30" height="30">
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  </div>
);

const Header = ({ size, siteTitle, siteSubtitle }) => {
  const [showMenu, setShowMenu] = useState(false);

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "dogbanner.png" }) {
        childImageSharp {
          screen: fixed(width: 120) {
            ...GatsbyImageSharpFixed
          }
          mobile: fixed(width: 48) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { screen, mobile } = data.file.childImageSharp;

  {
    transform: showMenu ? 'translateX(0)' : 'translateX(100%)';
  }

  const navClass = showMenu ? 'nav-visible' : '';

  return (
    <header className={styles.root}>
      <div className={styles.header}>
        <div>
          <div className={styles.logo}>
            <Link to="/">
              <Img style={{ margin: '10px 10px 0px 0px' }} alt="logo" loading="eager" fixed={screen} />
            </Link>
          </div>
          <div className={styles.title}>
            <Link to="/">
              <h1>{siteTitle}</h1>
              <h2>{siteSubtitle}</h2>
            </Link>
          </div>
        </div>
        <Language />
        <Navigation />
      </div>

      <div className={styles.headerMobile}>
        <div>
          <div className={styles.logo}>
            <Link to="/">
              <Img style={{ margin: '10px 10px 0px 0px' }} alt="logo" loading="eager" fixed={mobile} />
            </Link>
          </div>
          <div className={styles.titleMobile}>
            <Link to="/">
              <h1>{siteTitle}</h1>
              <h2>{siteSubtitle}</h2>
            </Link>
          </div>

          <Navigation mobile={true} className={navClass}>
            <Language />
          </Navigation>

          <MenuIcon
            onToggleMenu={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
      </div>
    </header>
  );
};

MenuIcon.propTypes = {
  onToggleMenu: PropTypes.func,
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteSubtitle: PropTypes.string.isRequired,
  size: PropTypes.shape({
    width: PropTypes.number,
    heigth: PropTypes.number,
  }),
};

export default Header;
