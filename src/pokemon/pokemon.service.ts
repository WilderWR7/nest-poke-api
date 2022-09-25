import { BadRequestException, Injectable, InternalServerErrorException,NotFoundException } from '@nestjs/common';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import {InjectModel} from '@nestjs/mongoose'
import { GetPokemon } from './dto/get.pokemon.dto'; 
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PokemonService {

  constructor(

    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly configService: ConfigService,
  ){
    console.log(configService.get<number>('PORT'))
  }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonModel.create(createPokemonDto)
      return pokemon;
    } catch (error) {
      this.handleExceptions(error)
    }
  }

  async findAll({limit=10,offset=0}:GetPokemon) {
    return await this.pokemonModel.find().limit(limit).skip(offset).sort({nro:1}).select('-__v')
  }

  
  async findOne(term: string) {
    let pokemon: Pokemon;
    if(!isNaN(+term)){  //si es un numero 
      pokemon = await this.pokemonModel.findOne({nro: term})
      return pokemon;
    }

    if(isValidObjectId(term)) {
      pokemon = await this.pokemonModel.findById(term)
      // return pokemon;
    }

    if(!pokemon) {
      pokemon = await this.pokemonModel.findOne({name: term.toLowerCase()})
    }

    if(!pokemon) {
      throw new NotFoundException(`No existe el pokemon con el id, nro o name: ${term}`)
    }
    return pokemon;
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne(term)

    if(updatePokemonDto.name)
    {
      updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
    }

    try {
      await pokemon.updateOne(updatePokemonDto)
      return {
        ...pokemon.toJSON(),...updatePokemonDto
      }
      
    } catch (error) {
      this.handleExceptions(error)
    }

  }

  async remove(id:string) {
    // const result = await this.pokemonModel.findByIdAndDelete(id)
    const result = await this.pokemonModel.deleteOne({_id: id})
    if(result.deletedCount === 0) {
      throw new BadRequestException(`Pokemon with id "${id}" not found`)
    }
    return result
  }

  private handleExceptions(error:any){
    if(error.code === 11000){
      throw new BadRequestException(`Ya existe el Pokemon ${JSON.stringify(error.keyValue)}`)
    }
    throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`)
  } 

}
