import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styles from './style/navigation.module.scss';

const ListLink = ({ to, children, page }) => {
  console.log(page);
  return (
    <li>
      <Link to={to}>
        <span>{children}</span>
      </Link>
    </li>
  );
};

export const Navigation = (props) => {
  return (
    <ul role="navigation" className={styles.list}>
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
  page: PropTypes.string.isRequired,
  children: PropTypes.object,
};
