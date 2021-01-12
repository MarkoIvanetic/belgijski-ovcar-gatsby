import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styles from './style/navigation.module.scss';

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export const Navigation = () => (
  <ul role="navigation" className={styles.list}>
    <ListLink to="/">Home</ListLink>
    <ListLink to="/photos/">Photos</ListLink>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
  </ul>
);
