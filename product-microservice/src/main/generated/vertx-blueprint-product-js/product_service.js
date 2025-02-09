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

/** @module vertx-blueprint-product-js/product_service */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JProductService = Java.type('io.vertx.blueprint.microservice.product.ProductService');
var Product = Java.type('io.vertx.blueprint.microservice.product.Product');

/**
 A service interface managing products.
 <p>
 This service is an event bus service (aka. service proxy)
 </p>

 @class
*/
var ProductService = function(j_val) {

  var j_productService = j_val;
  var that = this;

  var __super_initializePersistence = this.initializePersistence;
  var __super_addProduct = this.addProduct;
  var __super_retrieveProduct = this.retrieveProduct;
  var __super_retrieveProductPrice = this.retrieveProductPrice;
  var __super_retrieveAllProducts = this.retrieveAllProducts;
  var __super_retrieveProductsByPage = this.retrieveProductsByPage;
  var __super_deleteProduct = this.deleteProduct;
  var __super_deleteAllProducts = this.deleteAllProducts;
  /**
   Initialize the persistence.

   @public
   @param resultHandler {function} the result handler will be called as soon as the initialization has been accomplished. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.initializePersistence =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_productService["initializePersistence(io.vertx.core.Handler)"](function(ar) {
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
   Add a product to the persistence.

   @public
   @param product {Object} a product entity that we want to add 
   @param resultHandler {function} the result handler will be called as soon as the product has been added. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.addProduct =  function(product, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'function') {
      j_productService["addProduct(io.vertx.blueprint.microservice.product.Product,io.vertx.core.Handler)"](__args[0]  != null ? new Product(new JsonObject(Java.asJSONCompatible(__args[0]))) : null, function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_addProduct != 'undefined') {
      return __super_addProduct.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve the product with certain `productId`.

   @public
   @param productId {string} product id 
   @param resultHandler {function} the result handler will be called as soon as the product has been retrieved. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.retrieveProduct =  function(productId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_productService["retrieveProduct(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveProduct != 'undefined') {
      return __super_retrieveProduct.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve the product price with certain `productId`.

   @public
   @param productId {string} product id 
   @param resultHandler {function} the result handler will be called as soon as the product has been retrieved. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.retrieveProductPrice =  function(productId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_productService["retrieveProductPrice(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnJson(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveProductPrice != 'undefined') {
      return __super_retrieveProductPrice.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve all products.

   @public
   @param resultHandler {function} the result handler will be called as soon as the products have been retrieved. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.retrieveAllProducts =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_productService["retrieveAllProducts(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](utils.convReturnListSetDataObject(ar.result()), null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveAllProducts != 'undefined') {
      return __super_retrieveAllProducts.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Retrieve products by page.

   @public
   @param page {number} 
   @param resultHandler {function} the result handler will be called as soon as the products have been retrieved. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.retrieveProductsByPage =  function(page, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
      j_productService["retrieveProductsByPage(int,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](utils.convReturnListSetDataObject(ar.result()), null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_retrieveProductsByPage != 'undefined') {
      return __super_retrieveProductsByPage.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Delete a product from the persistence

   @public
   @param productId {string} product id 
   @param resultHandler {function} the result handler will be called as soon as the product has been removed. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.deleteProduct =  function(productId, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_productService["deleteProduct(java.lang.String,io.vertx.core.Handler)"](__args[0], function(ar) {
        if (ar.succeeded()) {
          __args[1](null, null);
        } else {
          __args[1](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_deleteProduct != 'undefined') {
      return __super_deleteProduct.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Delete all products from the persistence

   @public
   @param resultHandler {function} the result handler will be called as soon as the products have been removed. The async result indicates whether the operation was successful or not. 
   @return {ProductService}
   */
  this.deleteAllProducts =  function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_productService["deleteAllProducts(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          __args[0](null, null);
        } else {
          __args[0](null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_deleteAllProducts != 'undefined') {
      return __super_deleteAllProducts.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_productService;
};

ProductService._jclass = utils.getJavaClass("io.vertx.blueprint.microservice.product.ProductService");
ProductService._jtype = {accept: function(obj) {
    return ProductService._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(ProductService.prototype, {});
    ProductService.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ProductService._create = function(jdel) {var obj = Object.create(ProductService.prototype, {});
  ProductService.apply(obj, arguments);
  return obj;
}
ProductService.SERVICE_NAME = JProductService.SERVICE_NAME;
ProductService.SERVICE_ADDRESS = JProductService.SERVICE_ADDRESS;
module.exports = ProductService;