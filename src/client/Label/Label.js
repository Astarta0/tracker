import React from 'react';
import PropTypes from 'prop-types';

import join from '../../utils/utils';

import './Label.css';

const statusMap = {
  CLOSED: 'label_closed',
  ACTIVE: 'label_active',
  'IN REVIEW': 'label_in-review',
  DEFFERED: 'label_deffered'
};

const Label = props => {
  const { status } = props;

  return (
    <div className={join('label', statusMap[status])}>{props.status}</div>
  );
};

Label.propTypes = { status: PropTypes.string.isRequired };
export default Label;
