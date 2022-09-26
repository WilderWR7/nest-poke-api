"use strict";
//puede llamarse tambien app.config.ts
exports.__esModule = true;
exports.EnvConfiguration = void 0;
var EnvConfiguration = function () { return ({
    environmet: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: +process.env.PORT || 3002 //convertir int por que joi lo pasa a process.env.PORT como string
}); };
exports.EnvConfiguration = EnvConfiguration;
