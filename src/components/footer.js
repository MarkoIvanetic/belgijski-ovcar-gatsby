import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styles from './style/footer.module.scss';

const Footer = () => (
  <footer className={styles.root}>
    <div>
      <p>
        <strong>
          <FormattedMessage id="metadata_address" />:
        </strong>
        Ilovnjak 30, 10410 Velika Gorica
      </p>
      <p>
        <strong>tel:</strong>098/1744-194
      </p>
      <p>
        <strong>email:</strong>
        <a href="mailto: nikolapaulic4@gmail.com">nikolapaulic4@gmail.com</a>
      </p>
    </div>

    <div>
      <p>Copyright © Belgijski Ovčar 2015-{new Date().getFullYear()}</p>
      <div>
        {/* <a href="https://www.facebook.com/nikola.paulic.520" target="_blank" rel="noopener noreferrer">
          <img className="social-icon lazy" src="images/icons/facebook.png?1" alt="Facebook" />
        </a>
        <a href="https://www.youtube.com/channel/UCTvn3_T7YgR5Hna-vFtD4kw" rel="noopener noreferrer" target="_blank">
          <img className="social-icon lazy" src="images/icons/youtube.png?1" alt="Youtube" />
        </a> */}
      </div>
    </div>
  </footer>
);

export default Footer;
