import React, { Children, cloneElement, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styles from './style/navigation.module.scss';

const ListLink = ({ to, children, page }) => {
  console.log(page);
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

const sitemap = ['', 'ovcar', 'galerije', 'rodovnice'];

const NavLinkWrap = ({ children }) => {
  const page = useMemo(() => {
    const name = window.location.pathname.split('/')[2];
    return sitemap.indexOf(name);
  }, []);

  return (
    <ul role="navigation" className={styles.list}>
      {/* {React.Children.map(children, (child) => React.cloneElement(child, { page }, null))} */}
      {Children.map(children, (child, i) => {
        return cloneElement(child, { className: page === i ? 'active' : '' });
      })}
    </ul>
  );
};

export const Navigation = () => {
  return (
    <NavLinkWrap>
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
    </NavLinkWrap>
  );
};

ListLink.propTypes = {
  to: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  children: PropTypes.object,
};

NavLinkWrap.propTypes = {
  children: PropTypes.object,
};
