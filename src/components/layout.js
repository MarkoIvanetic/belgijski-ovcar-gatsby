import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';

import { useWindowSize } from '../utils/hooks';
import styles from './style/layout.module.scss';
import News from './news';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

const Layout = ({ children, intl }) => {
  const size = useWindowSize();
  return (
    <div className={styles.root}>
      <SEO lang={intl.locale} />
      <Header
        size={size}
        siteTitle={intl.formatMessage({ id: 'metadata_title' })}
        siteSubtitle={intl.formatMessage({ id: 'metadata_subtitle' })}
      />
      <News />
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
