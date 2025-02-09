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

/** @module vertx-blueprint-shopping-cart-js/shopping_cart_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JShoppingCartService = Java.type('io.vertx.blueprint.microservice.cart.ShoppingCartService');
var CartEvent = Java.type('io.vertx.blueprint.microservice.cart.CartEvent');
var ShoppingCart = Java.type('io.vertx.blueprint.microservice.cart.ShoppingCart');

/**
 A service interface for shopping cart operation.
 <p>
 This service is an event bus service (aka. service proxy).
 </p>

 @class
*/
var ShoppingCartService = function(j_val) {

  var j_shoppingCartService = j_val;
  var that = this;

  var __super_addCartEvent = this.addCartEvent;
  var __super_getShoppingCart = this.getShoppingCart;
  /**
   Add cart event to the event source.

   @public
   @param event {Object} cart event 
   @param resultHandler {function} async result handler 
   @return {ShoppingCartService}
   */
  this.addCartEvent =  function(event, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_shoppingCartService["addCartEvent(io.vertx.blueprint.microservice.cart.CartEvent,io.vertx.core.Handler)"](__args[0]  != null ? new CartEvent(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_addCartEvent != 'undefined') {
      return __super_addCartEvent.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Get shopping cart of a user.

   @public
   @param userId {string} user id 
   @param resultHandler {function} async result handler 
   @return {ShoppingCartService}
   */
  this.getShoppingCart =  function(userId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_shoppingCartService["getShoppingCart(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_getShoppingCart != 'undefined') {
      return __super_getShoppingCart.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_shoppingCartService;
};

ShoppingCartService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.cart.ShoppingCartService");
ShoppingCartService._jtype = {accept: function(obj) {
    return ShoppingCartService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(ShoppingCartService.prototype, {});
    ShoppingCartService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ShoppingCartService._create = function(jdel) {var obj = Object.create(ShoppingCartService.prototype, {});
  ShoppingCartService.apply(obj, arguments);
  return obj;
}
ShoppingCartService.SERVICE_NAME = JShoppingCartService.SERVICE_NAME;
ShoppingCartService.SERVICE_ADDRESS = JShoppingCartService.SERVICE_ADDRESS;
module.exports = ShoppingCartService;