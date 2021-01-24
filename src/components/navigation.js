import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styles from './style/navigation.module.scss';

const ListLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export const Navigation = ({ children, mobile, listStyle }) => {
  return (
    <ul role="navigation" className={mobile ? styles.mobileList : styles.list} style={listStyle}>
      {children && <li>{children}</li>}
      <ListLink to="/">
        <FormattedMessage id="nav_0" />
      </ListLink>
      <ListLink to="/ovcar/">
        <FormattedMessage id="nav_1" />
      </ListLink>
      <ListLink to="/galerije/">
        <FormattedMessage id="nav_2" />
      </ListLink>
      <ListLink to="/rodovnice/">
        <FormattedMessage id="nav_3" />
      </ListLink>
    </ul>
  );
};

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.object,
};

Navigation.propTypes = {
  children: PropTypes.object,
  listStyle: PropTypes.object,
  mobile: PropTypes.bool,
};
