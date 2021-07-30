// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportForbidIP = require('../../../app/middleware/forbidIP');
import ExportGzip = require('../../../app/middleware/gzip');
import ExportPrintdate = require('../../../app/middleware/printdate');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    forbidIP: typeof ExportForbidIP;
    gzip: typeof ExportGzip;
    printdate: typeof ExportPrintdate;
  }
}
