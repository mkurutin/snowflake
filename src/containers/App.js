'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as authActions from '../reducers/auth/authActions'
import * as deviceActions from '../reducers/device/deviceActions'
import * as globalActions from '../reducers/global/globalActions'

import React from 'react'
import
{
  StyleSheet,
  View,
  Text
}
  from 'react-native'

import Header from '../components/Header'

import reactMixin from 'react-mixin'
import TimerMixin from 'react-timer-mixin'

import I18n from '../lib/I18n'

function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version,
    auth: {
      form: {
        isFetching: state.auth.form.isFetching
      }
    },
    global: {
      currentState: state.global.currentState,
      showState: state.global.showState
    }
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators({ ...authActions, ...deviceActions, ...globalActions }, dispatch)
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

class App extends React.Component {
  /**
     * See if there's a sessionToken from a previous login
     *
     */
  componentDidMount () {
    // Use a timer so App screen is displayed
    this.setTimeout(
      () => {
        this.props.actions.getSessionToken()
      },
      2500
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <Header isFetching={this.props.auth.form.isFetching}
          showState={this.props.global.showState}
          currentState={this.props.global.currentState}
          onGetState={this.props.actions.getState}
          onSetState={this.props.actions.setState} />

        <Text style={styles.summary}>Snowflake {I18n.t('App.version')}:{this.props.deviceVersion}</Text>

      </View>
    )
  }
}
// Since we're using ES6 classes, have to define the TimerMixin
reactMixin(App.prototype, TimerMixin)

export default connect(mapStateToProps, mapDispatchToProps)(App)
