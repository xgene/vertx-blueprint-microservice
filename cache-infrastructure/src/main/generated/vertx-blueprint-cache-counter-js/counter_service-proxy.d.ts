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


/**
 A service interface for global cache and counter management using a cache backend (e.g. Redis).
 <p>
 This service is an event bus service (aka. service proxy)
 </p>

 @class
*/
export default class CounterService {

  constructor (eb: any, address: string);

  addThenRetrieve(key: string, resultHandler: (err: any, result: any) => any) : void;

  addThenRetrieveBy(key: string, increment: number, resultHandler: (err: any, result: any) => any) : void;

  retrieveThenAdd(key: string, resultHandler: (err: any, result: any) => any) : void;

  reset(key: string, resultHandler: (err: any, result: any) => any) : void;
}