"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PokemonModule = void 0;
var config_1 = require("@nestjs/config");
var common_1 = require("@nestjs/common");
var pokemon_service_1 = require("./pokemon.service");
var pokemon_controller_1 = require("./pokemon.controller");
var mongoose_1 = require("@nestjs/mongoose");
var pokemon_entity_1 = require("./entities/pokemon.entity");
var PokemonModule = /** @class */ (function () {
    function PokemonModule() {
    }
    PokemonModule = __decorate([
        (0, common_1.Module)({
            controllers: [pokemon_controller_1.PokemonController],
            providers: [pokemon_service_1.PokemonService],
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    {
                        name: pokemon_entity_1.Pokemon.name,
                        schema: pokemon_entity_1.PokemonSchema
                    }
                ]),
                config_1.ConfigModule
            ],
            exports: [mongoose_1.MongooseModule]
        })
    ], PokemonModule);
    return PokemonModule;
}());
exports.PokemonModule = PokemonModule;
