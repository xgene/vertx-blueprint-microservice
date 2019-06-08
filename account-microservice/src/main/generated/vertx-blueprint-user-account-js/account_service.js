/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-blueprint-user-account-js/account_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAccountService = Java.type('io.vertx.blueprint.microservice.account.AccountService');
var Account = Java.type('io.vertx.blueprint.microservice.account.Account');

/**
 A service interface managing user accounts.
 <p>
 This service is an event bus service (aka. service proxy).
 </p>

 @class
*/
var AccountService = function(j_val) {

  var j_accountService = j_val;
  var that = this;

  var __super_initializePersistence = this.initializePersistence;
  var __super_addAccount = this.addAccount;
  var __super_retrieveAccount = this.retrieveAccount;
  var __super_retrieveByUsername = this.retrieveByUsername;
  var __super_retrieveAllAccounts = this.retrieveAllAccounts;
  var __super_updateAccount = this.updateAccount;
  var __super_deleteAccount = this.deleteAccount;
  var __super_deleteAllAccounts = this.deleteAllAccounts;
  /**
   Initialize the persistence.

   @public
   @param resultHandler {function} the result handler will be called as soon as the initialization has been accomplished. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.initializePersistence =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_accountService["initializePersistence(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_initializePersistence != 'undefined') {
      return __super_initializePersistence.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a account to the persistence.

   @public
   @param account {Object} a account entity that we want to add 
   @param resultHandler {function} the result handler will be called as soon as the account has been added. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.addAccount =  function(account, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_accountService["addAccount(io.vertx.blueprint.microservice.account.Account,io.vertx.core.Handler)"](__args[0]  != null ? new Account(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_addAccount != 'undefined') {
      return __super_addAccount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve the user account with certain `id`.

   @public
   @param id {string} user account id 
   @param resultHandler {function} the result handler will be called as soon as the user has been retrieved. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.retrieveAccount =  function(id, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_accountService["retrieveAccount(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveAccount != 'undefined') {
      return __super_retrieveAccount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve the user account with certain `username`.

   @public
   @param username {string} username 
   @param resultHandler {function} the result handler will be called as soon as the user has been retrieved. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.retrieveByUsername =  function(username, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_accountService["retrieveByUsername(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveByUsername != 'undefined') {
      return __super_retrieveByUsername.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve all user accounts.

   @public
   @param resultHandler {function} the result handler will be called as soon as the users have been retrieved. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.retrieveAllAccounts =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_accountService["retrieveAllAccounts(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](utils.convReturnListSetDataObject(ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveAllAccounts != 'undefined') {
      return __super_retrieveAllAccounts.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Update user account info.

   @public
   @param account {Object} a account entity that we want to update 
   @param resultHandler {function} the result handler will be called as soon as the account has been added. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.updateAccount =  function(account, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_accountService["updateAccount(io.vertx.blueprint.microservice.account.Account,io.vertx.core.Handler)"](__args[0]  != null ? new Account(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_updateAccount != 'undefined') {
      return __super_updateAccount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Delete a user account from the persistence

   @public
   @param id {string} user account id 
   @param resultHandler {function} the result handler will be called as soon as the user has been removed. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.deleteAccount =  function(id, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_accountService["deleteAccount(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_deleteAccount != 'undefined') {
      return __super_deleteAccount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Delete all user accounts from the persistence

   @public
   @param resultHandler {function} the result handler will be called as soon as the users have been removed. The async result indicates whether the operation was successful or not. 
   @return {AccountService}
   */
  this.deleteAllAccounts =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_accountService["deleteAllAccounts(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_deleteAllAccounts != 'undefined') {
      return __super_deleteAllAccounts.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_accountService;
};

AccountService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.account.AccountService");
AccountService._jtype = {accept: function(obj) {
    return AccountService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(AccountService.prototype, {});
    AccountService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
AccountService._create = function(jdel) {var obj = Object.create(AccountService.prototype, {});
  AccountService.apply(obj, arguments);
  return obj;
}
AccountService.SERVICE_NAME = JAccountService.SERVICE_NAME;
AccountService.SERVICE_ADDRESS = JAccountService.SERVICE_ADDRESS;
module.exports = AccountService;