import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';
import { GetPokemon } from './dto/get.pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  // @HttpCode(HttpStatus.OK)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(@Query() queryParameters: GetPokemon) {
    // console.log({queryParameters})
    return this.pokemonService.findAll(queryParameters);
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }
  @Get(':limit')
  findLimit(@Param('term') term: string) {
    return this.pokemonService.findOne(term);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseMongoIdPipe) id: string) {
    return this.pokemonService.remove(id);
  }
}
