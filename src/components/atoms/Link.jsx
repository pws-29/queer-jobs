import React from 'react';
import styled from 'styled-components';
import {COLORS, WEIGHTS} from '../constants'


function Link({children, type, target}) {
    return (
        <LinkStyled className={type} href={target}>{children}</LinkStyled>
    )
}

const LinkStyled = styled.a`
    cursor: pointer;

    &.headerLink{
        color: ${COLORS.black};
        font-weight: ${WEIGHTS.regular};
        font-size: 1.125rem;
        text-decoration: none;
    }

    &.bodyLink{
        color: ${COLORS.secondary.normal};
        font-weight: ${WEIGHTS.bold};
        font-size: 1rem;
        text-decoration: underline;
    }

`

export  default Link;