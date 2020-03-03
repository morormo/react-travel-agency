import React from 'react';
import styles from './HappyHourAd.scss';
import propTypes from 'prop-types';

class HappyHourAd extends React.Component {
  static propTypes = {
    title: propTypes.string,
    promoDescription: propTypes.string,
  }
  render() {
    const {title, promoDescription} = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>
    );
  }
}
export default HappyHourAd;