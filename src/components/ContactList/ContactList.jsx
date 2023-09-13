import React from 'react';
import PropTypes from 'prop-types';
import { StyledItem, StyledItemBtn, StyledList } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts.map(el => (
        <StyledItem key={el.id}>
          {el.name}: {el.number}
          <StyledItemBtn onClick={() => onDelete(el.id)}>Delete</StyledItemBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
