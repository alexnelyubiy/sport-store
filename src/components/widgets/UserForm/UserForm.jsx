import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Input, ConfirmButton } from "components/controls";
import { UserInfoWrap, UserInfoForm } from "../UserInfo/UserInfo.styled";

const validate = values => {
  const errors = {}
  if (values.get("fullName") ) {
    if (values.get("fullName").length > 25) {
      errors.fullName = 'Must be 25 characters or less'
    }
  } 
  
  if (values.get("email")) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get("email"))) {
      errors.email = 'Invalid email address'
    }
  } 
  if (values.get("phone")) {
    if (!/^(0|[1-9][0-9]{9})$/i.test(values.get("phone"))) {
      errors.phone = 'Invalid phone number, must be 10 digits'
    }
  }  
  return errors
}

// export const phoneNumber = value =>
//   value && !/^(0|[1-9][0-9]{9})$/i.test(value)
//     ? 'Invalid phone number, must be 10 digits'
//     : undefined
    
const warn = values => {
  const warnings = {}
  if (values.get("fullName") < 19) {
    warnings.age = 'You have weard name)...'
  }
  return warnings
}

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
    {console.log("IMMUTABLE INPUT", input)}
      <Input {...input} required placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const SyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting, invalid } = props
  return (
    <UserInfoWrap>
      <h2>Your info</h2>
      <UserInfoForm onSubmit={handleSubmit}>
        <Field
          name="fullName"
          type="text"
          component={renderField}
          placeholder="Full name"
        />
        <Field 
          name="city" 
          type="text" 
          component={renderField} 
          placeholder="Your City" 
        />
        <Field 
          name="email" 
          type="email" 
          component={renderField} 
          placeholder="Email" 
        />
        <Field 
          name="phone" 
          type="number" 
          // validate={[phoneNumber]}
          component={renderField}  
          placeholder="+38(068)0000000" 
        />
        <div>
          <ConfirmButton type="submit" disabled={submitting || pristine || invalid}>
            Submit
          </ConfirmButton>
          {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button> */}
        </div>
      </UserInfoForm>
    </UserInfoWrap>
  )
}

export default reduxForm({
  form: 'syncValidation', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  destroyOnUnmount: false,
  warn // <--- warning function given to redux-form
})(SyncValidationForm)