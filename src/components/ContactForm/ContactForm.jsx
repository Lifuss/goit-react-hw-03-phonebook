import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledLabel,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit, phoneInputId, nameInputId }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor={nameInputId}>
        Name
        <StyledInput
          type="text"
          name="name"
          id={nameInputId}
          pattern="[A-z]{2,9} [A-z]{2,9}"
          title="latin chars, 
          format:Name Surname"
          required
        />
      </StyledLabel>
      <StyledLabel htmlFor={phoneInputId}>
        Number
        <StyledInput
          type="tel"
          name="number"
          id={phoneInputId}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="123-45-67"
          required
        />
      </StyledLabel>

      <StyledBtn>Add contacts</StyledBtn>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
  phoneInputId: PropTypes.string,
  nameInputId: PropTypes.string,
};

export default ContactForm;
