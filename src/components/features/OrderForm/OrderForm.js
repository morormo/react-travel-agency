import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripId, tripDescription, countryName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    tripDescription,
    countryName,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  if (options['name'] && options['contact']) {
    fetch(url, fetchOptions)
      .then(function(response) {
        return response.json();
      });
  } else {
    alert('Please complete name and contact');
  }
};
class OrderForm extends React.Component {
  render() {
    const{tripCost, options, setOrderOption, tripId, tripDescription,countryName} = this.props;
    return (
      <Grid>
        <Row>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption ={setOrderOption} />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} />
          </Col>
          <Col xs={12}>
            <Button onClick={() => sendOrder(options, tripCost, tripId, tripDescription, countryName)}>Order now!</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}


OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.number,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripDescription: PropTypes.string,
  countryName: PropTypes.string,
};

export default OrderForm;