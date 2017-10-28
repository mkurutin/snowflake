'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../reducers/auth/authActions'

import LoginRender from '../components/LoginRender'

import React from 'react'

import Constants from '../lib/constants'
import I18n from '../lib/I18n'

const {
  REGISTER,
  LOGIN,
  FORGOT_PASSWORD
} = Constants

function mapStateToProps (state) {
  return {
    auth: state.auth,
    global: state.global
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  }
}

function buttonPressHandler (resetPassword, email) {
  resetPassword(email)
}

function ForgotPassword (props) {
  const loginButtonText = I18n.t('ForgotPassword.reset_password')
  const onButtonPress = buttonPressHandler.bind(null,
    props.actions.resetPassword,
    props.auth.form.fields.email)

  return (
    <LoginRender
      formType={FORGOT_PASSWORD}
      loginButtonText={loginButtonText}
      onButtonPress={onButtonPress}
      displayPasswordCheckbox={false}
      leftMessageType={REGISTER}
      rightMessageType={LOGIN}
      auth={props.auth}
      global={props.global}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
