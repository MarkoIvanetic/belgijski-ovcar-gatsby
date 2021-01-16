import React from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styles from './style/navigation.module.scss';

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export const Navigation = () => (
  <ul role="navigation" className={styles.list}>
    <ListLink to="/">
      <FormattedMessage id="nav_0" />
    </ListLink>
    <ListLink to="/ovcar/">
      <FormattedMessage id="nav_1" />
    </ListLink>
    <ListLink to="/gallery/">
      <FormattedMessage id="nav_2" />
    </ListLink>
    <ListLink to="/blog/">
      <FormattedMessage id="nav_3" />
    </ListLink>
    <ListLink to="/contact/">
      <FormattedMessage id="nav_4" />
    </ListLink>
  </ul>
);
