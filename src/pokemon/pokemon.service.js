"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PokemonService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var pokemon_entity_1 = require("./entities/pokemon.entity");
var mongoose_2 = require("@nestjs/mongoose");
var PokemonService = /** @class */ (function () {
    function PokemonService(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        console.log(configService.get('PORT'));
    }
    PokemonService.prototype.create = function (createPokemonDto) {
        return __awaiter(this, void 0, void 0, function () {
            var pokemon, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.pokemonModel.create(createPokemonDto)];
                    case 2:
                        pokemon = _a.sent();
                        return [2 /*return*/, pokemon];
                    case 3:
                        error_1 = _a.sent();
                        this.handleExceptions(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PokemonService.prototype.findAll = function (_a) {
        var _b = _a.limit, limit = _b === void 0 ? 10 : _b, _c = _a.offset, offset = _c === void 0 ? 0 : _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.pokemonModel.find().limit(limit).skip(offset).sort({ nro: 1 }).select('-__v')];
                    case 1: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    PokemonService.prototype.findOne = function (term) {
        return __awaiter(this, void 0, void 0, function () {
            var pokemon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!isNaN(+term)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pokemonModel.findOne({ nro: term })];
                    case 1:
                        pokemon = _a.sent();
                        return [2 /*return*/, pokemon];
                    case 2:
                        if (!(0, mongoose_1.isValidObjectId)(term)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pokemonModel.findById(term)
                            // return pokemon;
                        ];
                    case 3:
                        pokemon = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!!pokemon) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.pokemonModel.findOne({ name: term.toLowerCase() })];
                    case 5:
                        pokemon = _a.sent();
                        _a.label = 6;
                    case 6:
                        if (!pokemon) {
                            throw new common_1.NotFoundException("No existe el pokemon con el id, nro o name: ".concat(term));
                        }
                        return [2 /*return*/, pokemon];
                }
            });
        });
    };
    PokemonService.prototype.update = function (term, updatePokemonDto) {
        return __awaiter(this, void 0, void 0, function () {
            var pokemon, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(term)];
                    case 1:
                        pokemon = _a.sent();
                        if (updatePokemonDto.name) {
                            updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, pokemon.updateOne(updatePokemonDto)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, __assign(__assign({}, pokemon.toJSON()), updatePokemonDto)];
                    case 4:
                        error_2 = _a.sent();
                        this.handleExceptions(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PokemonService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pokemonModel.deleteOne({ _id: id })];
                    case 1:
                        result = _a.sent();
                        if (result.deletedCount === 0) {
                            throw new common_1.BadRequestException("Pokemon with id \"".concat(id, "\" not found"));
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PokemonService.prototype.handleExceptions = function (error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException("Ya existe el Pokemon ".concat(JSON.stringify(error.keyValue)));
        }
        throw new common_1.InternalServerErrorException("Can't create Pokemon - Check server logs");
    };
    PokemonService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_2.InjectModel)(pokemon_entity_1.Pokemon.name))
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
