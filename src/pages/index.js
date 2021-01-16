import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import { PlaceholderImage } from '../components/placeholderImage';
import '../styles/index.scss';

{
  /* <FormattedMessage id="nav_2" />; */
}

const IndexPage = () => {
  // const intl = useIntl();
  // console.log(intl);
  return (
    <Layout>
      <div>
        <PlaceholderImage width="275px" />
        <PlaceholderImage width="275px" />
        <PlaceholderImage width="275px" />
        <PlaceholderImage width="275px" />
        <PlaceholderImage width="275px" />
      </div>

      <div>
        <h5>
          <FormattedMessage id="home_h5" />
        </h5>
        <p>
          <FormattedMessage id="home_p1" />
        </p>
        <p>
          <FormattedMessage id="home_p2" />
        </p>
        <p>
          <FormattedMessage id="home_p3" />
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
