import styled from 'styled-components';
import { media } from '../ui/index';

//
export const Wrapper = styled.div`
  margin-top: 0.75rem;
  border-bottom: 2px solid #9a9a9a;
  ${media.desktop`
	margin-top: 4.75rem;
	`};
`;

// Title
export const Title = styled.h2`
  color: #95a5a6;
  text-align: right;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
  padding: 0.25rem 2rem;
  ${media.desktop`
	padding: 0;
	`};
`;

export const HcardBock = styled.div`
  padding: 2rem;
  background-color: #fff;
`;

export const HcardHeader = styled.header`
  background-color: #2c3e50;
  color: #fff;
  margin: -2rem -2rem 1rem;
  position: relative;
  padding-right: 8.5rem;
  min-height: 100px;
  padding-left: 2rem;
  font-size: 1.75rem;
  font-weight: 700;
`;

export const HcardHeaderName = styled.div`
  position: absolute;
  bottom: 1.25rem;
  padding-left: 2rem;
  line-height: 1.25;
  width: calc(100% - 8.5rem);
  left: 0;
`;

export const HcardAvatar = styled.span`
  position: absolute;
  bottom: -15px;
  right: 2rem;
  padding: 0.125rem;
  display: block;
  height: auto;
  width: 85px;
  height: 105px;
  background-color: #fff;
  border: 1px solid #9a9a9a;
  border-bottom-width: 2px;
`;

export const HcardAvatarImg = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
`;

export const HcardRow = styled.div`
  border-bottom: 1px solid #dbe0e2;
  margin-bottom: 0.25rem;
  min-height: 1.5rem;
  padding-left: ${props => (props.padding ? '60px' : '0')};
`;

export const HcardColumn = styled.div`
  width: 50%;
  display: inline-block;
`;

export const HcardLabel = styled.div`
  color: #34495e;
  font-size: 0.625rem;
  display: inline-block;
  text-transform: uppercase;
  padding-right: 1rem;
  width: 60px;
`;
