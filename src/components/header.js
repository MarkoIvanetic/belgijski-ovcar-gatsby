import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import { StyledHeader } from './style/Header.style';

import Language from './language';
import { Navigation } from './navigation';
import Img from 'gatsby-image';

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/">
          <img source="https://www.belgijskiovcar.com/images/dogbanner.png?1" alt="banner" />
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Language />
        <Navigation />
      </div>
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
