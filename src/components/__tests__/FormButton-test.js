/**
 * # FormButton-test.js
 *
 * This class tests that the form button displays correctly
 *
 * *Note:* if you want to understand the structures here, add a
 * ```console.log``` and then ```npm test```.
 */
'use strict'

/**
* ## Imports
 */

import 'react-native'
import React from 'react'

import FormButton from '../FormButton'

import ShallowRenderer from 'react-test-renderer/shallow'

it('FormButton', () => {
  const props = {
    isDisabled: false,
    onPress: () => {},
    buttonText: 'TestString'
  }
  const renderer = new ShallowRenderer()
  renderer.render(<FormButton {...props} />)
  const tree = renderer.getRenderOutput()
  expect(tree).toMatchSnapshot()
})
