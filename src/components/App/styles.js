import styled from 'styled-components';
import { media } from '../ui/index';

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
  text-align: center;
  ${media.desktop`
	text-align: left;
	`};
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
  background-color: #e1e4e7;
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
