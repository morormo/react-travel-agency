import React from 'react';
import styles from './Hero.scss';
import propTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';
import DaysToSummer from '../../features/DaysToSummer/DaysToSummer';


const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <div className={styles.daysToSummer}><DaysToSummer /></div>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <div className={styles.happyHour}>
      <HappyHourAd title='Happy Hour' promoDescription='It is promotion time' />
    </div>
  </div>
);

Hero.propTypes = {
  variant: propTypes.string,
  titleText: propTypes.node.isRequired,
  imageSrc: propTypes.node.isRequired,
  
};

export default Hero;
