/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import styles from './style/layout.module.scss';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Layout = ({ page, children, intl }) => {
  return (
    <div className={styles.root}>
      <SEO lang={intl.locale} title={intl.formatMessage({ id: 'metadata_title' })} keywords={[`gatsby`, `application`, `react`]} />
      <Header siteTitle={intl.formatMessage({ id: 'metadata_title' })} siteSubtitle={intl.formatMessage({ id: 'metadata_subtitle' })} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(Layout);
