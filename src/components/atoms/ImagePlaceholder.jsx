import React from 'react'
import styled from 'styled-components'
import homePlansLeft from '../../../public/images/home-plans-1.jpg'
import homePlansRight from '../../../public/images/home-plans-2.png'

const images = {
  'home-plans-1': homePlansLeft,
  'home-plans-2': homePlansRight
};

/**
 * ### Parâmetros
 * 
 * @param {string} imageName - Nome da imagem a ser renderizada. Usar nome do asset sem extensão - suggested_value: ['home-plans-1', 'home-plans-2']
 * 
 */
function ImagePlaceholder({ imageName }) {
  const imagePath = images[imageName]
  console.log(imageName);
  return (
    <Wrapper>
      <Img src={imagePath} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`
const Img = styled.img`
  
`

export default ImagePlaceholder