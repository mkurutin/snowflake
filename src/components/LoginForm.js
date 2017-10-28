/**
 * # LoginForm.js
 *
 * This class utilizes the ```tcomb-form-native``` library and just
 * sets up the options required for the 3 states of Login, namely
 * Login, Register or Reset Password
 *
 */
'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Constants from '../lib/constants'
import t from 'tcomb-form-native'
import I18n from '../lib/I18n'

const {
  REGISTER,
  LOGIN,
  FORGOT_PASSWORD
} = Constants

const Form = t.form.Form

export default class LoginForm extends React.Component {
  render () {
    let formType = this.props.formType

    let options = {
      fields: {}
    }

    let username = {
      label: I18n.t('LoginForm.username'),
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.usernameHasError,
      error: this.props.form.fields.usernameErrorMsg
    }

    let email = {
      label: I18n.t('LoginForm.email'),
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.emailHasError,
      error: this.props.form.fields.emailErrorMsg
    }

    let secureTextEntry = !this.props.form.fields.showPassword

    let password = {
      label: I18n.t('LoginForm.password'),
      maxLength: 12,
      secureTextEntry: secureTextEntry,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordHasError,
      error: this.props.form.fields.passwordErrorMsg
    }

    let passwordAgain = {
      label: I18n.t('LoginForm.password_again'),
      secureTextEntry: secureTextEntry,
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordAgainHasError,
      error: this.props.form.fields.passwordAgainErrorMsg
    }

    let loginForm
    switch (formType) {
      case (REGISTER):
        loginForm = t.struct({
          username: t.String,
          email: t.String,
          password: t.String,
          passwordAgain: t.String
        })
        options.fields['username'] = username
        options.fields['username'].placeholder = I18n.t('LoginForm.username')
        options.fields['username'].autoCapitalize = 'none'
        options.fields['email'] = email
        options.fields['email'].placeholder = I18n.t('LoginForm.email')
        options.fields['email'].autoCapitalize = 'none'
        options.fields['password'] = password
        options.fields['password'].placeholder = I18n.t('LoginForm.password')
        options.fields['passwordAgain'] = passwordAgain
        options.fields['passwordAgain'].placeholder = I18n.t('LoginForm.password_again')
        break

      case (LOGIN):
        loginForm = t.struct({
          username: t.String,
          password: t.String
        })
        options.fields['username'] = username
        options.fields['username'].placeholder = I18n.t('LoginForm.username')
        options.fields['username'].autoCapitalize = 'none'
        options.fields['password'] = password
        options.fields['password'].placeholder = I18n.t('LoginForm.password')
        break

      case (FORGOT_PASSWORD):
        loginForm = t.struct({
          email: t.String
        })
        options.fields['email'] = email
        options.fields['email'].autoCapitalize = 'none'
        options.fields['email'].placeholder = I18n.t('LoginForm.email')
        break
    }

    return (
      <Form
        type={loginForm}
        options={options}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}

/**
 * * form: the properties to set into the UI form
 * * value: the values to set in the input fields
 * * onChange: function to call when user enters text
 */
LoginForm.propTypes = {
  formType: PropTypes.string,
  form: PropTypes.object,
  value: PropTypes.object,
  onChange: PropTypes.func
}
