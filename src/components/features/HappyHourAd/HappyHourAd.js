import React from 'react';
import styles from './HappyHourAd.scss';
import propTypes from 'prop-types';


class HappyHourAd extends React.Component {
  static propTypes = {
    title: propTypes.string,
    promoDescription: propTypes.string,
  }
  
  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >= 12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
  render() {
    const {title, promoDescription} = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
        <div className={styles.countdown}>{this.getCountdownTime()}</div>
      </div>
    );
  }
}
export default HappyHourAd;