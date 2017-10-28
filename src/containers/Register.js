'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../reducers/auth/authActions'

import LoginRender from '../components/LoginRender'

import React from 'react'

import Constants from '../lib/constants'
import I18n from '../lib/I18n'

const {
  LOGIN,
  REGISTER,
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

function buttonPressHandler (signup, username, email, password) {
  signup(username, email, password)
}

function Register (props) {
  const loginButtonText = I18n.t('Register.register')
  const onButtonPress = buttonPressHandler.bind(null,
    props.actions.signup,
    props.auth.form.fields.username,
    props.auth.form.fields.email,
    props.auth.form.fields.password)

  return (
    <LoginRender
      formType={REGISTER}
      loginButtonText={loginButtonText}
      onButtonPress={onButtonPress}
      displayPasswordCheckbox
      leftMessageType={FORGOT_PASSWORD}
      rightMessageType={LOGIN}
      auth={props.auth}
      global={props.global}
    />

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
