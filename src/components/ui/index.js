import styled from 'styled-components';
import { css } from 'styled-components';

export const sizes = {
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

export const InlineBlock = styled.span`
  display: inline-block;
`;

export const Button = styled.button`
  background: ${props => (props.primary ? '#3cb0fd' : '#627b8b')};
  border-radius: 4px;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  border: 0;
  border-bottom: solid #1f628d 2px;
  text-decoration: none;
  display: block;
  width: 100%;
  &:hover {
    background: ${props => (props.primary ? '#3cb0fd' : '#445966')};
  }
`;
