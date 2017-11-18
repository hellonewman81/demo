import React from 'react';
import avatar from '../../svg/avatar.svg';
// import './Hcard.css';
import { InlineBlock } from '../ui/';
import {
  Wrapper,
  HcardBock,
  HcardHeader,
  HcardRow,
  HcardColumn,
  HcardLabel,
  HcardHeaderName,
  Title,
  HcardAvatar,
  HcardAvatarImg
} from './styles';

const Hcard = props => {
  const { uri, user = {} } = props;
  return (
    <Wrapper>
      <Title>Hcard Preview</Title>
      <HcardBock id="hcard-Andrew-William-Newman" className="vcard">
        <HcardHeader>
          <HcardHeaderName className="fn n">
            <InlineBlock className="given-name">{user.firstName}</InlineBlock>
            <InlineBlock className="family-name">{user.lastName}</InlineBlock>
          </HcardHeaderName>
          <HcardAvatar>
            <HcardAvatarImg src={uri ? uri : avatar} alt="avatar" />
          </HcardAvatar>
        </HcardHeader>

        <HcardRow>
          <HcardLabel>Email</HcardLabel>
          <InlineBlock className="email">{user.email}</InlineBlock>
        </HcardRow>

        <HcardRow>
          <HcardLabel>Phone</HcardLabel>
          <InlineBlock className="tel">{user.telephone}</InlineBlock>
        </HcardRow>

        <div className="adr">
          <HcardRow>
            <HcardLabel>Address</HcardLabel>
            <span className="street-address">
              {user.housename} {user.street}
            </span>
          </HcardRow>

          <HcardRow padding>
            <InlineBlock className="locality">{user.suburb}</InlineBlock>
            <InlineBlock className="region">
              {user.state && `, ${user.state}`}
            </InlineBlock>
          </HcardRow>

          <HcardRow>
            <HcardColumn>
              <HcardLabel>Postcode</HcardLabel>
              <InlineBlock className="postal-code">{user.postcode}</InlineBlock>
            </HcardColumn>
            <HcardColumn>
              <HcardLabel>Country</HcardLabel>
              <InlineBlock className="country-name">{user.country}</InlineBlock>
            </HcardColumn>
          </HcardRow>
        </div>
      </HcardBock>
    </Wrapper>
  );
};

export default Hcard;
