import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Upload from '../Upload/';

import {
  UformForm,
  UformInput,
  UformInputBlock,
  UformLabel,
  InvalidMsg,
  UformHeader,
  UformTitle,
  UformFieldSet,
  UformControlsBlock,
  UformControls
} from './styles';
import { Button } from '../ui/';

// render input for redux form Fields
const RenderInput = ({ input, label, type, odd, meta: { touched, error } }) => (
  <UformInputBlock odd={odd} error={error}>
    <UformLabel>{label}</UformLabel>
    <UformInput {...input} placeholder={label} type={type} />
    {touched && error && <InvalidMsg>{error}</InvalidMsg>}
  </UformInputBlock>
);

// Render user form component
const UserForm = props => {
  const {
    handleSubmit,
    submitting,
    updateAvatar,
    displayUploader,
    toggleUploader
  } = props;
  return (
    <div>
      {displayUploader ? (
        <Upload updateAvatar={updateAvatar} toggleUploader={toggleUploader} />
      ) : (
        <UformForm onSubmit={handleSubmit}>
          <UformHeader>
            <UformTitle>Personal Details</UformTitle>
          </UformHeader>

          <UformFieldSet>
            <Field
              component={RenderInput}
              name="firstName"
              label="First Name"
              type="text"
              odd={true}
            />

            <Field
              name="lastName"
              component={RenderInput}
              type="text"
              label="Last Name"
            />

            <Field
              name="email"
              component={RenderInput}
              type="email"
              label="Email"
              odd={true}
            />

            <Field
              name="telephone"
              component={RenderInput}
              type="text"
              label="Phone"
            />
          </UformFieldSet>

          <UformHeader>
            <UformTitle>Address</UformTitle>
          </UformHeader>

          <UformFieldSet>
            <Field
              name="housename"
              component={RenderInput}
              type="text"
              label="House name or #"
              odd={true}
            />

            <Field
              name="street"
              component={RenderInput}
              type="text"
              label="Street"
            />

            <Field
              name="suburb"
              component={RenderInput}
              type="text"
              label="Suburb"
              odd={true}
            />

            <Field
              name="state"
              component={RenderInput}
              type="text"
              label="State"
            />

            <Field
              name="postcode"
              component={RenderInput}
              type="text"
              label="Postcode"
              odd={true}
            />

            <Field
              name="country"
              component={RenderInput}
              type="text"
              label="Country"
            />
          </UformFieldSet>

          <UformControls>
            <UformControlsBlock odd>
              <Button
                type="button"
                onClick={e => {
                  toggleUploader();
                  e.preventDefault();
                }}
              >
                Upload Avatar
              </Button>
            </UformControlsBlock>
            <UformControlsBlock>
              <Button primary type="submit" disabled={submitting}>
                Create hCard
              </Button>
            </UformControlsBlock>
          </UformControls>
        </UformForm>
      )}
    </div>
  );
};

const validate = values => {
  const errors = {};

  let requiredFields = [
    'firstName',
    'lastName',
    'email',
    'telephone',
    'housename',
    'street',
    'state',
    'suburb',
    'postcode',
    'country',
    'avatarFile'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'This field is required';
    }
  });
  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.postcode) {
    errors.postcode = 'This field is required';
  } else if (isNaN(Number(values.postcode))) {
    errors.postcode = 'Must be a number';
  }
  return errors;
};

export default reduxForm({
  form: 'user',
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  initialValues: {}
})(UserForm);
