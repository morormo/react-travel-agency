import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import {Row, Col, Grid} from 'react-flexbox-grid';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
  render() {
    const {options, tripCost, setOrderOption} = this.props;
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
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.number,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
