/**
 * # Backend.js
 *
 * This class mocks Backend
 *
 */
'use strict'
/**
 * ## Async
 *
 * Need to still treat as async
 */
require('regenerator-runtime/runtime')

export default class Backend {
  /**
   *
   * ### constructor
   * prepare the response for all the methods
   */
  constructor () {
    var _bodyInit = JSON.stringify({
      code: 200
    })
    this.response = {
      'status': 201
    }
    this.response._bodyInit = _bodyInit
  }

  /**
   * ### logout
   * @returns {Object} response
   */
  async logout () {
    return this.response
  }

  /**
   * ### login
   * @returns {Object} response
   */
  async login () {
    return this.response
  }

  /**
   * ### signup
   * @returns {Object} response
   */
  async signup () {
    return this.response
  }

  /**
   * ### resetPassword
   * @returns {Object} response
   */
  async resetPassword () {
    return this.response
  }

  /**
   * ### getProfile
   * @returns {Object} response
   */
  async getProfile () {
    return this.response
  }

  /**
   * ### updateProfile
   * @returns {Object} response
   */
  async updateProfile () {
    return this.response
  }
}
