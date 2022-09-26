"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PokemonController = void 0;
var common_1 = require("@nestjs/common");
var parse_mongo_id_pipe_1 = require("../common/pipes/parse-mongo-id.pipe");
var PokemonController = /** @class */ (function () {
    function PokemonController(pokemonService) {
        this.pokemonService = pokemonService;
    }
    // @HttpCode(HttpStatus.OK)
    PokemonController.prototype.create = function (createPokemonDto) {
        return this.pokemonService.create(createPokemonDto);
    };
    PokemonController.prototype.findAll = function (queryParameters) {
        // console.log({queryParameters})
        return this.pokemonService.findAll(queryParameters);
    };
    PokemonController.prototype.findOne = function (term) {
        return this.pokemonService.findOne(term);
    };
    PokemonController.prototype.findLimit = function (term) {
        return this.pokemonService.findOne(term);
    };
    PokemonController.prototype.update = function (id, updatePokemonDto) {
        return this.pokemonService.update(id, updatePokemonDto);
    };
    PokemonController.prototype.remove = function (id) {
        return this.pokemonService.remove(id);
    };
    __decorate([
        (0, common_1.Post)()
        // @HttpCode(HttpStatus.OK)
        ,
        __param(0, (0, common_1.Body)())
    ], PokemonController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], PokemonController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':term'),
        __param(0, (0, common_1.Param)('term'))
    ], PokemonController.prototype, "findOne");
    __decorate([
        (0, common_1.Get)(':limit'),
        __param(0, (0, common_1.Param)('term'))
    ], PokemonController.prototype, "findLimit");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], PokemonController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id', parse_mongo_id_pipe_1.ParseMongoIdPipe))
    ], PokemonController.prototype, "remove");
    PokemonController = __decorate([
        (0, common_1.Controller)('pokemon')
    ], PokemonController);
    return PokemonController;
}());
exports.PokemonController = PokemonController;
