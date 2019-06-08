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

/** @module vertx-blueprint-cache-counter-js/counter_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCounterService = Java.type('io.vertx.blueprint.microservice.cache.CounterService');

/**
 A service interface for global cache and counter management using a cache backend (e.g. Redis).
 <p>
 This service is an event bus service (aka. service proxy)
 </p>

 @class
*/
var CounterService = function(j_val) {

  var j_counterService = j_val;
  var that = this;

  var __super_addThenRetrieve = this.addThenRetrieve;
  var __super_addThenRetrieveBy = this.addThenRetrieveBy;
  var __super_retrieveThenAdd = this.retrieveThenAdd;
  var __super_reset = this.reset;
  /**
   First add the counter, then retrieve.

   @public
   @param key {string} counter key 
   @param resultHandler {function} async result handler 
   */
  this.addThenRetrieve =  function(key, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_counterService["addThenRetrieve(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnLong(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_addThenRetrieve != 'undefined') {
      return __super_addThenRetrieve.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   First add the counter by a <code>increment</code>, then retrieve.

   @public
   @param key {string} counter key 
   @param increment {number} increment step 
   @param resultHandler {function} async result handler 
   */
  this.addThenRetrieveBy =  function(key, increment, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] ==='number' && typeof __args[2] === 'function') {
      j_counterService["addThenRetrieveBy(java.lang.String,java.lang.Long,io.vertx.core.Handler)"](__args[0], utils.convParamLong(__args[1]), function(ar) {
        if (ar.succeeded()) {
          __args[2](utils.convReturnLong(ar.result()), null);
        } else {
          __args[2](null, ar.cause());
        }
      });
    } else if (typeof __super_addThenRetrieveBy != 'undefined') {
      return __super_addThenRetrieveBy.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   First retrieve the counter, then add.

   @public
   @param key {string} counter key 
   @param resultHandler {function} async result handler 
   */
  this.retrieveThenAdd =  function(key, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_counterService["retrieveThenAdd(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnLong(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_retrieveThenAdd != 'undefined') {
      return __super_retrieveThenAdd.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Reset the value of the counter with a certain <code>key</code>

   @public
   @param key {string} counter key 
   @param resultHandler {function} async result handler 
   */
  this.reset =  function(key, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_counterService["reset(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_reset != 'undefined') {
      return __super_reset.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_counterService;
};

CounterService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.cache.CounterService");
CounterService._jtype = {accept: function(obj) {
    return CounterService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(CounterService.prototype, {});
    CounterService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
CounterService._create = function(jdel) {var obj = Object.create(CounterService.prototype, {});
  CounterService.apply(obj, arguments);
  return obj;
}
CounterService.SERVICE_NAME = JCounterService.SERVICE_NAME;
CounterService.SERVICE_ADDRESS = JCounterService.SERVICE_ADDRESS;
module.exports = CounterService;