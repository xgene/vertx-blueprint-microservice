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

/** @module vertx-blueprint-payment-js/payment_query_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JPaymentQueryService = Java.type('io.vertx.blueprint.microservice.payment.PaymentQueryService');
var Payment = Java.type('io.vertx.blueprint.microservice.payment.Payment');

/**
 A service interface managing payment transactions query.
 <p>
 This service is an event bus service (aka. service proxy).
 </p>

 @class
*/
var PaymentQueryService = function(j_val) {

  var j_paymentQueryService = j_val;
  var that = this;

  var __super_initializePersistence = this.initializePersistence;
  var __super_addPaymentRecord = this.addPaymentRecord;
  var __super_retrievePaymentRecord = this.retrievePaymentRecord;
  /**
   Initialize the persistence.

   @public
   @param resultHandler {function} the result handler will be called as soon as the initialization has been accomplished. The async result indicates whether the operation was successful or not. 
   */
  this.initializePersistence =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_paymentQueryService["initializePersistence(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      });
    } else if (typeof __super_initializePersistence != 'undefined') {
      return __super_initializePersistence.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Add a payment record into the backend persistence.

   @public
   @param payment {Object} payment entity 
   @param resultHandler {function} async result handler 
   */
  this.addPaymentRecord =  function(payment, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_paymentQueryService["addPaymentRecord(io.vertx.blueprint.microservice.payment.Payment,io.vertx.core.Handler)"](__args[0]  != null ? new Payment(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_addPaymentRecord != 'undefined') {
      return __super_addPaymentRecord.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve payment record from backend by payment id.

   @public
   @param payId {string} payment id 
   @param resultHandler {function} async result handler 
   */
  this.retrievePaymentRecord =  function(payId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_paymentQueryService["retrievePaymentRecord(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_retrievePaymentRecord != 'undefined') {
      return __super_retrievePaymentRecord.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_paymentQueryService;
};

PaymentQueryService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.payment.PaymentQueryService");
PaymentQueryService._jtype = {accept: function(obj) {
    return PaymentQueryService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(PaymentQueryService.prototype, {});
    PaymentQueryService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
PaymentQueryService._create = function(jdel) {var obj = Object.create(PaymentQueryService.prototype, {});
  PaymentQueryService.apply(obj, arguments);
  return obj;
}
PaymentQueryService.SERVICE_NAME = JPaymentQueryService.SERVICE_NAME;
PaymentQueryService.SERVICE_ADDRESS = JPaymentQueryService.SERVICE_ADDRESS;
module.exports = PaymentQueryService;