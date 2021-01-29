import React from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'gatsby-plugin-intl';
<<<<<<< HEAD
import { graphql, useStaticQuery } from 'gatsby';
=======
import { useStaticQuery } from 'gatsby';
>>>>>>> master

import styles from './style/footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
<<<<<<< HEAD
      contentfulContact {
        email
        phone
        address
      }
=======
>>>>>>> master
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

<<<<<<< HEAD
  const {
    youtube,
    facebook,
    contentfulContact: { email, phone, address },
  } = data;
=======
  const { youtube, facebook } = data;
>>>>>>> master

  return (
    <footer className={styles.root}>
      <div>
        <p>
          <strong>
            <FormattedMessage id="metadata_address" />:
          </strong>
<<<<<<< HEAD
          {address}
        </p>
        <p>
          <strong>tel:</strong>
          {phone}
        </p>
        <p>
          <strong>email:</strong>
          <a href={`mailto: ${email}`}>{email}</a>
=======
          Ilovnjak 30, 10410 Velika Gorica
        </p>
        <p>
          <strong>tel:</strong>098/1744-194
        </p>
        <p>
          <strong>email:</strong>
          <a href="mailto: nikolapaulic4@gmail.com">nikolapaulic4@gmail.com</a>
>>>>>>> master
        </p>
      </div>

      <div>
        <p>Copyright © Belgijski Ovčar 2015-{new Date().getFullYear()}</p>
<<<<<<< HEAD
        <div className={styles.social}>
=======
        <div>
>>>>>>> master
          <a href="https://www.facebook.com/nikola.paulic.520" target="_blank" rel="noopener noreferrer">
            <Img fixed={facebook.childImageSharp.fixed} />
          </a>
          <a href="https://www.youtube.com/channel/UCTvn3_T7YgR5Hna-vFtD4kw" rel="noopener noreferrer" target="_blank">
            <Img fixed={youtube.childImageSharp.fixed} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
