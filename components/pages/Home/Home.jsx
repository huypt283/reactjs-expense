import PropTypes from 'prop-types';
import React, { createElement } from 'react';
import { Col, Row } from 'react-bootstrap';

const Home = (props) => {
  return (
    <Row>
    </Row>
  );
};

Home.propTypes = {
  componentBlock1: PropTypes.element,
  componentBlock2: PropTypes.element,
  componentBlock3: PropTypes.element,
  componentBlock4: PropTypes.element,
  componentBlock5: PropTypes.element,
};

Home.defaultProps = {
  componentBlock1: createElement('div'),
  componentBlock2: createElement('div'),
  componentBlock3: createElement('div'),
  componentBlock4: createElement('div'),
  componentBlock5: createElement('div'),
};

export default Home;
