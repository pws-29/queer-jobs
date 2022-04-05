import React from 'react';
import styled from 'styled-components';
import heart from '../../../public/assets/icons/heart.svg';
import trophy from '../../../public/assets/icons/trophy.svg';
import Verified from '../../../public/assets/icons/Verified.svg';


const icons = {
  heart: heart,
  trophy: trophy,
  verified: Verified,
};

/**
 * 
 * ### Parâmetros
 * 
 * @param {string} type - Tipo do ícone. - suggested_value: ["heart", "trophy", "verified"]
 * @param {string} size - Tamanho do ícone. Preencher apenas se necessáro. - suggested_value: "" ou "200"
 * 
 */

const Icon = ({ type, size }) => {
  const src = icons[type];

  return (
    <Wrapper>
      <IconWrapper src={src} size={size} />
    </Wrapper>
  );

}


const Wrapper = styled.div`
  
`

const IconWrapper = styled.img`
  width: ${props => `${props.size}px`};
  padding: 9px;
`


export default Icon