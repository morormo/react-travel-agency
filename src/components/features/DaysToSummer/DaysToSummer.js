import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    summerTime: PropTypes.string,
  };

  getDaysToSummer() {
    const currentTime = new Date();
    const summerStart = new Date(
      Date.UTC(currentTime.getUTCFullYear(), 5, 21)
    );
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23));
    const oneDayToSummer = new Date(
      Date.UTC(currentTime.getUTCFullYear(), 8, 22)
    );

    const daysToSummerDescription = ' days to summer';
    const oneDayToSummerDescription = ' day to summer';

    const oneDay = 24 * 60 * 60 * 1000; 
    let diffDays;

    if (currentTime < summerStart) {
      diffDays =
      Math.ceil(Math.abs((currentTime - summerStart) / oneDay)) +
        daysToSummerDescription;
    } else if (currentTime > summerEnd) {
      const nextYear = currentTime.getUTCFullYear() + 1;
      const nextSummer = new Date(nextYear, 5, 21);// eslint-disable-line no-unused-vars

      diffDays =
      Math.ceil(Math.abs((currentTime - summerStart) / oneDay)) +
      daysToSummerDescription;
    } else if (currentTime == oneDayToSummer) {
      diffDays =
      Math.ceil(Math.abs((currentTime - summerStart) / oneDay)) +
      oneDayToSummerDescription;
    }

    return diffDays;
  }

  render() {
    const { title, summerTime } = this.props;
    const getDaysToSummer = this.getDaysToSummer();

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.countdown}>
          {getDaysToSummer ? getDaysToSummer : summerTime}
        </div>
      </div>
    );
  }
}

export default DaysToSummer;