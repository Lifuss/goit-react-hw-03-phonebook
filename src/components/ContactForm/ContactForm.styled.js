import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 350px;
  padding: 15px;

  border: 1px solid black;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  font-size: 20px;
`;

export const StyledInput = styled.input`
  width: 150px;
`;

export const StyledBtn = styled.button`
  width: fit-content;
  padding: 2px 8px;
  background-color: #fff;
  border-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
