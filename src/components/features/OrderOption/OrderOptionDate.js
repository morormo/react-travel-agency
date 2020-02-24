import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


class OrderOptionDate extends React.Component {

  render() {
    const {currentValue, setOptionValue} = this.props;
    return (
      <div>
        <DatePicker
          className={styles.input}
          selected={currentValue}
          onChange={setOptionValue}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;