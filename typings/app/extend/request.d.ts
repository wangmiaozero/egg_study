// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExtendRequest = require('../../../app/extend/request');
type ExtendRequestType = typeof ExtendRequest;
declare module 'egg' {
  interface Request extends ExtendRequestType { }
}