import styled from 'styled-components';
import { StyledBtn } from 'components/ContactForm/ContactForm.styled';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledItem = styled.li`
  font-size: 18px;
`;

export const StyledItemBtn = styled(StyledBtn)`
  margin-left: 8px;
`;
