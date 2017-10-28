'use strict'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Actions } from 'react-native-router-flux'
import NavigationBar from 'react-native-navbar'

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as deviceActions from '../reducers/device/deviceActions'
import I18n from '../lib/I18n'

function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(deviceActions, dispatch)
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

function Subview (props) {
  const titleConfig = {
    title: I18n.t('Subview.subview')
  }

  const leftButtonConfig = {
    title: I18n.t('Subview.back'),
    handler: Actions.pop
  }

  return (
    <View>
      <NavigationBar
        title={titleConfig}
        leftButton={leftButtonConfig}/>
      <View style={styles.container}>
        <Text style={styles.summary}>{I18n.t('Subview.subview')} {I18n.t('App.version')}: {props.deviceVersion}
        </Text>
      </View>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Subview)
