'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import { Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class ItemCheckbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: this.props.checked,
      bg_color: this.props.backgroundColor
    }
  }

  static propTypes = {
    onCheck: PropTypes.func,
    onUncheck: PropTypes.func,
    icon_check: PropTypes.string,
    icon_open: PropTypes.string,
    size: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    iconSize: PropTypes.string,
    checked: PropTypes.bool,
    style: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onCheck: null,
    onUncheck: null,
    icon_check: 'check-square',
    icon_open: 'square-o',
    size: 30,
    backgroundColor: 'white',
    color: 'grey',
    iconSize: 'normal',
    checked: false,
    text: 'MISSING TEXT',
    disabled: false
  }

  _getCircleCheckStyle = () => {
    return {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: this.state.bg_color,
      borderColor: this.props.color,
      borderWidth: 2,
      borderRadius: this.props.size / 2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2
    }
  }

  _completeProgress = () => {
    if (this.state.checked) {
      this.setState({
        checked: false,
        bg_color: this.props.backgroundColor
      })
      if (this.props.onUncheck) {
        this.props.onUncheck()
      }
    } else {
      this.setState({
        checked: true,
        bg_color: this.props.color
      })
      if (this.props.onCheck) {
        this.props.onCheck()
      }
    }
  }

  componentDidMount () {
    if (this.props.checked) {
      this._completeProgress()
    }
  }

  render () {
    let iconName = this.props.icon_open
    if (this.state.checked) {
      iconName = this.props.icon_check
    }
    if (this.props.disabled) {
      iconName = this.props.checked ? this.props.icon_check : this.props.icon_open
      return (
        <View style={this.props.style}>
          <TouchableWithoutFeedback>
            <View style={{
              flexDirection: 'row',
              flex: 1
            }}>
              <Icon
                name={iconName}
                size={20}
              />
              <Text> {this.props.text}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    } else {
      return (
        <View style={this.props.style}>
          <TouchableHighlight
            onPress={this._completeProgress}>
            <View style={{
              flexDirection: 'row',
              flex: 1
            }}>
              <Icon
                name={iconName}
                size={20}/>
              <Text> {this.props.text}</Text>
            </View>
          </TouchableHighlight>
        </View>
      )
    }
  }
}
