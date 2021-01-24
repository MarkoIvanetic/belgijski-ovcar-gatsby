import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={`404: ${intl.formatMessage({ id: 'metadata_title' })}`} />
    <h1>
      <FormattedMessage id="metadata_subtitle" />
    </h1>
    <p>
      <FormattedMessage id="metadata_subtitle" />
    </p>
  </Layout>
);

export default injectIntl(NotFoundPage);
