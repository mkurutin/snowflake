'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../reducers/auth/authActions'

import LoginRender from '../components/LoginRender'

import React from 'react'
import I18n from '../lib/I18n'

import Constants from '../lib/constants'
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

function buttonPressHandler (login, username, password) {
  login(username, password)
}

function Login (props) {
  const loginButtonText = I18n.t('Login.login')
  const onButtonPress = buttonPressHandler.bind(null,
    props.actions.login,
    props.auth.form.fields.username,
    props.auth.form.fields.password
  )

  return (
    <LoginRender
      formType={LOGIN}
      loginButtonText={loginButtonText}
      onButtonPress={onButtonPress}
      displayPasswordCheckbox
      leftMessageType={REGISTER}
      rightMessageType={FORGOT_PASSWORD}
      auth={props.auth}
      global={props.global}
    />
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
