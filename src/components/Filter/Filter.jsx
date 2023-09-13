import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <>
      <StyledText>Find contacts by name or number</StyledText>
      <input on onChange={onChange} type="text" />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
