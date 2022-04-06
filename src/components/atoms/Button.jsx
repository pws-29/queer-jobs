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
const ButtonStyled = styled.button`
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  border: none;
  cursor: pointer;

  &.primary {
    background-color: ${COLORS.primary.normal};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.black};
    padding: 14px 24px;

    :hover {
      background-color: ${COLORS.primary.hover};
    }

    :active {
      background-color: ${COLORS.primary.active};
    }
  }

  &.secondary {
    background-color: ${COLORS.secondary.normal};
    border-radius: ${RADIUS.sm};
    color: ${COLORS.white};
    padding: 7px 52px;

    :hover {
      background-color: ${COLORS.secondary.hover};
    }

    :active {
      background-color: ${COLORS.secondary.active};
    }
  }
`



export default Button