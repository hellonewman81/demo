import {connect} from 'react-redux';
import React from 'react';
import {updateAvatarImg, toggleUploader} from '../../actions'
import UserForm from '../../components/UserForm/UserForm.js';
import {getFormValues, getFormSyncErrors, getFormMeta, SubmissionError} from 'redux-form';

const uFormSubmit = () => {
  alert("Thanks...")

  return false
}

const FormContainer = (props) => (
  <div>
    <UserForm {...props} uFormSubmit={uFormSubmit}/>
  </div>
)

const mapStateToProps = (state) => {
  return {
    user: getFormValues('user')(state),
    userSyncErrors: getFormSyncErrors('user')(state),
    userMeta: getFormMeta('user')(state),
    uri: state.app.uri ? state.app.uri : false,
    displayUploader: state.app.uploader_vis
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAvatar: (uri) => {
    dispatch(updateAvatarImg(uri))
  },
  toggleUploader: (uri) => {
    dispatch(toggleUploader())
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormContainer);
