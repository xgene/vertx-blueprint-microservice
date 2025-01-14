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

/** @module vertx-blueprint-shopping-cart-js/checkout_service */
var utils = require('vertx-js/util/utils');
var Vertx = require('vertx-js/vertx');
var ServiceDiscovery = require('vertx-service-discovery-js/service_discovery');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCheckoutService = Java.type('io.vertx.blueprint.microservice.cart.CheckoutService');
var CheckoutResult = Java.type('io.vertx.blueprint.microservice.cart.CheckoutResult');

/**
 A service interface for shopping cart checkout logic.
 <p>
 This service is an event bus service (aka. service proxy).
 </p>

 @class
*/
var CheckoutService = function(j_val) {

  var j_checkoutService = j_val;
  var that = this;

  var __super_createService = this.createService;
  var __super_checkout = this.checkout;
  /**
   Shopping cart checkout.

   @public
   @param userId {string} user id 
   @param handler {function} async result handler 
   */
  this.checkout =  function(userId, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_checkoutService["checkout(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      });
    } else if (typeof __super_checkout != 'undefined') {
      return __super_checkout.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_checkoutService;
};

CheckoutService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.cart.CheckoutService");
CheckoutService._jtype = {accept: function(obj) {
    return CheckoutService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(CheckoutService.prototype, {});
    CheckoutService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
CheckoutService._create = function(jdel) {var obj = Object.create(CheckoutService.prototype, {});
  CheckoutService.apply(obj, arguments);
  return obj;
}
/**
 Create a shopping checkout service instance

 @memberof module:vertx-blueprint-shopping-cart-js/checkout_service
 @param vertx {Vertx} 
 @param discovery {ServiceDiscovery} 
 @return {CheckoutService}
 */
CheckoutService.createService =  function(vertx, discovery) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel) {
    return utils.convReturnVertxGen(CheckoutService, JCheckoutService["createService(io.vertx.core.Vertx,io.vertx.servicediscovery.ServiceDiscovery)"](__args[0]._jdel, __args[1]._jdel)) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

CheckoutService.SERVICE_NAME = JCheckoutService.SERVICE_NAME;
CheckoutService.SERVICE_ADDRESS = JCheckoutService.SERVICE_ADDRESS;
CheckoutService.PAYMENT_EVENT_ADDRESS = JCheckoutService.PAYMENT_EVENT_ADDRESS;
CheckoutService.ORDER_EVENT_ADDRESS = JCheckoutService.ORDER_EVENT_ADDRESS;
module.exports = CheckoutService;