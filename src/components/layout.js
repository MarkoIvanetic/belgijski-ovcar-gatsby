import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import { useWindowSize } from '../utils/hooks';
import styles from './style/layout.module.scss';

import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Layout = ({ children, intl, location }) => {
  const size = useWindowSize();
  const pageName = intl.formatMessage({ id: location });
  return (
    <div className={styles.root}>
      <SEO lang={intl.locale} location={pageName} />
      <Header
        size={size}
        siteTitle={intl.formatMessage({ id: 'metadata_title' })}
        siteSubtitle={intl.formatMessage({ id: 'metadata_subtitle' })}
      />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  intl: PropTypes.shape({
    locale: PropTypes.string,
    formatMessage: PropTypes.func,
  }),
};

export default injectIntl(Layout);
