import {connect} from 'react-redux';
import React from 'react';
/* import { pagerUp } from '../actions' */
import Hcard from '../../components/Hcard/Hcard.js';
import {getFormValues, getFormSyncErrors, getFormMeta} from 'redux-form';

const HcardContainer = (props) => (
  <div>
    <Hcard {...props}/>
  </div>
)

const mapStateToProps = (state) => {
  return {
    user: getFormValues('user')(state),
    userSyncErrors: getFormSyncErrors('user')(state),
    userMeta: getFormMeta('user')(state),
    uri: state.app.uri ? state.app.uri : false
  }
}

const mapDispatchToProps = (dispatch) => ({
  onCheckoutSubmit: () => {
    // dispatch(checkoutSubmit())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HcardContainer);
