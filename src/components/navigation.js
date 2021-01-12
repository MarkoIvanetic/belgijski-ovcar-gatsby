import React from 'react';
import { Link } from 'gatsby-plugin-intl';

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export const Navigation = () => (
  <div style={{ padding: `0 1rem` }}>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/photos/">Photos</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </div>
);
