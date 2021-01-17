import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import SEO from '../components/seo';

const Redirect = ({ intl }) => {
  return <SEO title={`${intl.formatMessage({ id: 'metadata_metatitle' })}`} />;
};

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

export default injectIntl(Redirect);
