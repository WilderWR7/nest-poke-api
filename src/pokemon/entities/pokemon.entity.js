"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonSchema = exports.Pokemon = void 0;
var mongoose_1 = require("mongoose");
var dist_1 = require("@nestjs/mongoose/dist");
var Pokemon = /** @class */ (function (_super) {
    __extends(Pokemon, _super);
    function Pokemon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, dist_1.Prop)({
            unique: true,
            index: true
        })
    ], Pokemon.prototype, "name");
    __decorate([
        (0, dist_1.Prop)({
            unique: true,
            index: true
        })
    ], Pokemon.prototype, "nro");
    Pokemon = __decorate([
        (0, dist_1.Schema)()
    ], Pokemon);
    return Pokemon;
}(mongoose_1.Document));
exports.Pokemon = Pokemon;
exports.PokemonSchema = dist_1.SchemaFactory.createForClass(Pokemon);
