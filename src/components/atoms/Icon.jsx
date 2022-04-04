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

const Icon = ({ type, color, size}) => {
  const src = icons[type];
  
  return (
    <Wrapper>
      <IconWrapper src={src} color={color} size={size} />
    </Wrapper>
  );

  }


const Wrapper = styled.div`
  & > svg {
    display: block;
    width: ${props => `${props.size}px`};

    /* eu colocaria  width: ${(p) => p.Width}rem; 
    pq  esses 3 são de páginas e não linkam a  nada.  Alias, colocaria H3 estão antes de h3.*/
    
  }

  
`;
const IconWrapper = styled.img`
  width: ${props => `${props.size}px`}; 

`


export default Icon