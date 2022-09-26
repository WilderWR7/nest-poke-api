"use strict";
exports.__esModule = true;
exports.JoiValidationSchema = void 0;
var Joi = require("joi");
exports.JoiValidationSchema = Joi.object({
    MONGODB: Joi.required(),
    PORT: Joi.number()["default"](3005) //resultado final 
});
