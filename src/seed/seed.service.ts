import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
// import axios,{AxiosInstance} from 'axios';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
import { CreatePokemonDto } from 'src/pokemon/dto/create-pokemon.dto';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokeApi } from './interfaces/poke-response.interface';


@Injectable()
export class SeedService {

  constructor(
    // private readonly pokemonService: PokemonService, // mi forma
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http:AxiosAdapter
  ){}

  // private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    await this.pokemonModel.deleteMany({}) /// eliminar toda la base de datos
    const data = await this.http.get<PokeApi>('http://pokeapi.co/api/v2/pokemon?limit=650')
    const pokemonToInsert:CreatePokemonDto[] =[];
    // const l = "http://pokeapi.co/api/v2/"
    data.results.map(async pokemon=> {
      
      const url = pokemon.url.split("/");
      pokemonToInsert.push( {
        name: pokemon.name,
        nro: +url[url.length -2 ]
      })
      // this.pokemonService.create(dataPokemon) mi forma
      // await this.pokemonModel.create(dataPokemon)
    })

    await this.pokemonModel.insertMany(pokemonToInsert)
    return 'Create data'
  }

}
