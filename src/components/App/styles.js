import styled from 'styled-components';
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

//
export const Wrapper = styled.div`
  text-align: left;
  ${media.desktop`
	position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
	`};
`;

// Title
export const Title = styled.h1`
  color: goldenrod;
  font-weight: 400;
`;

// Title
export const WrapperInner = styled.div`
  text-align: left;
  ${media.desktop`
	display: table;
  width: 100%;
  height: 100%;
	`};
`;

// Title
export const WrapperLeft = styled.div`
  text-align: left;
  ${media.desktop`
	padding: 0;
    display: table-cell;
    height: 100%;
    width: 50%;
    padding-left: 2rem;
    vertical-align: top;
	`};
`;

// Title
export const WrapperRight = styled.div`
  text-align: left;
  ${media.desktop`
	display: table-cell;
  position: relative;
  width: 100%;
  width: 50%;
  padding:0 2rem 0 0;
	`};
`;

// Title
export const LeftInset = styled.div`
  ${media.desktop`
	max-width: 430px;
  margin-left: auto;
  margin-right: 2rem;
  padding-top: 4rem; 
	`};
`;

// Title
export const RightInset = styled.div`
  ${media.desktop`
	max-width: 430px;
  margin-right: auto;
  margin-left: 2rem;
  padding-top: 4rem;
	`};
`;
