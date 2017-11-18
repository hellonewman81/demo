import styled from 'styled-components';
import { media } from '../ui/index';

export const UformForm = styled.form`
  padding: 0 1rem;
  ${media.desktop`
	padding: 0;
	`};
`;

export const UformHeader = styled.header``;

export const UformTitle = styled.h3`
  border-bottom: 1px solid #9a9a9a;
  color: #b0b8bc;
  font-size: 0.675rem;
  text-transform: uppercase;
`;

export const UformFieldSet = styled.div``;

//
export const UformInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #9a9a9a;
  border-radius: 5px;
  width: 100%;
  font-size: 1rem;
`;

export const UformInputBlock = styled.div`
  margin-bottom: 0.75rem;
  vertical-align: top;
  width: 100%;
  ${media.desktop`
	width: 50%;
	${props =>
    props.odd
      ? 'padding: 0 .75rem 0 0;'
      : 'padding: 0 0 0 .75rem;'} display: inline-block;
	`};
`;

export const UformLabel = styled.label`
  font-size: 0.75rem;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.25rem;
`;

export const InvalidMsg = styled.div`
  font-size: 0.75rem;
  color: #ff0000;
  padding: 0.25rem 0 0;
`;

export const UformControls = styled.div`
  margin-top: 1rem;
`;

export const UformControlsBlock = styled.div`
  margin-bottom: 0.75rem;
  vertical-align: top;
  display: inline-block;
  width: 50%;
  ${props => (props.odd ? 'padding: 0 .75rem 0 0;' : 'padding: 0 0 0 .75rem;')};
`;
