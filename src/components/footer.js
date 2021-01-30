import React from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { graphql, useStaticQuery } from 'gatsby';

import styles from './style/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      contentfulContact {
        email
        phone
        address
      }
      youtube: file(relativePath: { eq: "icons/youtube.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      facebook: file(relativePath: { eq: "icons/facebook.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const {
    youtube,
    facebook,
    contentfulContact: { email, phone, address },
  } = data;

  const [street, region] = address.split(',');

  return (
    <footer className={styles.root} itemScope itemType="https://schema.org/LocalBusiness">
      <div>
        <p itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <strong>
            <FormattedMessage id="metadata_address" />:
          </strong>
          <span itemProp="streetAddress">{street},</span>
          <span itemProp="addressLocality">{region}</span>
        </p>
        <p>
          <strong>tel:</strong>
          <span itemProp="telephone">{phone}</span>
        </p>
        <p>
          <strong>email:</strong>
          <a href={`mailto: ${email}`}>{email}</a>
        </p>
        <p className={styles.schema}>
          <span itemProp="description">
            <FormattedMessage id="description" />
          </span>
        </p>
      </div>

      <div>
        <p>
          Copyright © Belgijski Ovčar - <b itemProp="name">Od Slunja</b> 2015-{new Date().getFullYear()}
        </p>
        <div className={styles.social}>
          <a href="https://www.facebook.com/nikola.paulic.520" target="_blank" rel="noopener noreferrer">
            <Img fixed={facebook.childImageSharp.fixed} alt="facebook icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCTvn3_T7YgR5Hna-vFtD4kw" rel="noopener noreferrer" target="_blank">
            <Img fixed={youtube.childImageSharp.fixed} alt="youtube icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
