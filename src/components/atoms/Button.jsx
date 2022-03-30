import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, RADIUS } from '../constants'

/**
 * ### Parâmetros
 * 
 * @param {string} type - Tipo do botão - suggested_value: 'primary' or 'secondary';
 * @param {string} children - Label do botão - suggested_value: 'Clique aqui';
 * 
 */

function Button({ type, children }) {
  return (
    <ButtonStyled className={type}>{children}</ButtonStyled>
  );
};


// TODO: Pensar nos botões com padding diferente;
// TODO: Estilo hover;
const ButtonStyled = styled.button`
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  border: none;
  padding: 14px 24px;

  &.primary {
    background-color: ${COLORS.primary};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.black};
  }

  &.secondary {
    background-color: ${COLORS.secondary};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.white};
  }
`



export default Button