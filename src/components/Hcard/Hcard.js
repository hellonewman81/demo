import React from 'react';
import avatar from '../../svg/avatar.svg';
import './Hcard.css';

const Hcard = props => {
  const { uri, user = {} } = props;
  return (
    <div className="hcard">
      <div>
        <h2 className="hcard-title">Hcard Preview</h2>
        <div id="hcard-Andrew-William-Newman" className="vcard hcard-block">
          <div className="hcard-header">
            <div className="hcard-header-name fn n">
              <span className="given-name d-inline-block">
                {user.firstName}
              </span>{' '}
              <span className="family-name d-inline-block">
                {user.lastName}
              </span>
            </div>
            <span className="hcard-avatar">
              <img
                src={uri ? uri : avatar}
                className="hcard-avatar-img"
                alt="avatar"
              />
            </span>
          </div>

          <div className="hcard-row">
            <span className="hcard-label">Email</span>
            <span className="email">{user.email}</span>
          </div>

          <div className="hcard-row">
            <span className="hcard-label">Phone</span>
            <span className="tel d-inline-block">{user.telephone}</span>
          </div>

          <div className="adr">
            <div className="hcard-row">
              <span className="hcard-label">Address</span>
              <span className="street-address">
                {user.housename} {user.street}
              </span>
            </div>

            <div className="hcard-row hcard-label-space">
              <span className="locality d-inline-block">{user.suburb}</span>
              <span className="region d-inline-block">
                {user.state && `, ${user.state}`}
              </span>
            </div>

            <div className="hcard-row">
              <div className="hcard-column">
                <span className="hcard-label">Postcode</span>
                <span className="postal-code d-inline-block">
                  {user.postcode}
                </span>
              </div>
              <div className="hcard-column">
                <span className="hcard-label">Country</span>
                <span className="country-name d-inline-block">
                  {user.country}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hcard;
