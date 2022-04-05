import React from 'react'
import styled from 'styled-components'
import homePlansLeft from '../../../public/images/home-plans-1.jpg'
// import homePlansRight from '../../../public/images/home-plans-2.jpg'


function ImagePlaceholder() {
  return (
    <Wrapper>
      <Img src={homePlansLeft} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`
const Img = styled.img`
  
`

export default ImagePlaceholder