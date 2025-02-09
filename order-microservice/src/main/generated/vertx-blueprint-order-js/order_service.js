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

/** @module vertx-blueprint-order-js/order_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JOrderService = Java.type('io.vertx.blueprint.microservice.order.OrderService');
var Order = Java.type('io.vertx.blueprint.microservice.order.Order');

/**
 A service interface managing order storage operations.
 <p>
 This service is an event bus service (aka. service proxy).
 </p>

 @class
*/
var OrderService = function(j_val) {

  var j_orderService = j_val;
  var that = this;

  var __super_initializePersistence = this.initializePersistence;
  var __super_retrieveOrdersForAccount = this.retrieveOrdersForAccount;
  var __super_createOrder = this.createOrder;
  var __super_retrieveOrder = this.retrieveOrder;
  /**
   Initialize the persistence.

   @public
   @param resultHandler {function} async result handler 
   @return {OrderService}
   */
  this.initializePersistence =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_orderService["initializePersistence(io.vertx.core.Handler)"](function(ar) {
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
   Retrieve orders belonging to a certain account.

   @public
   @param accountId {string} account id 
   @param resultHandler {function} async result handler 
   @return {OrderService}
   */
  this.retrieveOrdersForAccount =  function(accountId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_orderService["retrieveOrdersForAccount(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnListSetDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveOrdersForAccount != 'undefined') {
      return __super_retrieveOrdersForAccount.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Save an order into the persistence.

   @public
   @param order {Object} order data object 
   @param resultHandler {function} async result handler 
   @return {OrderService}
   */
  this.createOrder =  function(order, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_orderService["createOrder(io.vertx.blueprint.microservice.order.Order,io.vertx.core.Handler)"](__args[0]  != null ? new Order(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_createOrder != 'undefined') {
      return __super_createOrder.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve the order with a certain <code>orderId</code>.

   @public
   @param orderId {number} order id 
   @param resultHandler {function} async result handler 
   @return {OrderService}
   */
  this.retrieveOrder =  function(orderId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      j_orderService["retrieveOrder(java.lang.Long,io.vertx.core.Handler)"](utils.convParamLong(__args[0]), function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveOrder != 'undefined') {
      return __super_retrieveOrder.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_orderService;
};

OrderService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.order.OrderService");
OrderService._jtype = {accept: function(obj) {
    return OrderService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(OrderService.prototype, {});
    OrderService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
OrderService._create = function(jdel) {var obj = Object.create(OrderService.prototype, {});
  OrderService.apply(obj, arguments);
  return obj;
}
OrderService.SERVICE_NAME = JOrderService.SERVICE_NAME;
OrderService.SERVICE_ADDRESS = JOrderService.SERVICE_ADDRESS;
module.exports = OrderService;