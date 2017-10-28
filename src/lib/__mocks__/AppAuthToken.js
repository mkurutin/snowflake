/**
 * # AppAuthToken.js
 *
 * Simple mock of lib/AppAuthToken.js
 */
'use strict'
/**
 * ## Async
 *
 * Need to still treat as async
 */
require('regenerator-runtime/runtime')
export class AppAuthToken {
  /**
   * ## AppAuthToken
   *
   * ### getSessionToken
   * @returns {Object} sessionToken
   */
  async getSessionToken () {
    return {
      sessionToken: {
        sessionToken: 'token'
      }
    }
  }

  /**
   * ### storeSessionToken
   * @returns {Object} empty
   */
  async storeSessionToken () {
    return {}
  }

  /**
   * ### deleteSessionToken
   */
  async deleteSessionToken () {
    return {}
  }
}
export let appAuthToken = new AppAuthToken()
