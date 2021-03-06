import React from 'react'
import { reduxForm, Field } from 'redux-form'

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined
const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div className='position-relative'>
      <input {...input} className={touched && error ? 'error' : ''} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span className='form-error'>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const renderTextarea = ({
  input,
  type,
  label,
  meta: { touched, error, warning }
}) =>
  <div>
    <label>
      {label}
    </label>
    <div className='position-relative'>
      <textarea rows='5' {...input} className={touched && error ? 'error' : ''} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span className='form-error'>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <div>
      <h1>Add New Asset</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="asset_name"
          type="text"
          component={renderField}
          label="Asset Name"
          validate={[required]}
          warn={alphaNumeric}/>
        <Field
          name="asset_desc"
          type="text"
          component={renderTextarea}
          label="Description"/>
        <div className='pull-right'>
          <button type="submit" className='btn primary' disabled={pristine || submitting}>
            Submit
          </button>
        </div>
        <div className='clearfix' />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation' // a unique identifier for this form
})(FieldLevelValidationForm)
