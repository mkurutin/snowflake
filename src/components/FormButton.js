'use strict'
import React from 'react'
import { StyleSheet, View } from 'react-native'

/**
 * The platform neutral button
 */
const Button = require('apsl-react-native-button')

const styles = StyleSheet.create({
  signin: {
    marginLeft: 10,
    marginRight: 10
  },
  button: {
    backgroundColor: '#FF3366',
    borderColor: '#FF3366'
  }

})

export default function FormButton ({buttonText, isDisabled, onPress}) {
  return (
    <View style={styles.signin}>
      <Button style={styles.button}
        textStyle={{fontSize: 18}}
        isDisabled={isDisabled}
        onPress={onPress}>
        {buttonText}
      </Button>
    </View>
  )
}
