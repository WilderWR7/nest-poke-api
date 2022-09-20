import { Injectable } from '@nestjs/common';
import axios,{AxiosInstance} from 'axios';
import { PokeApi } from './interfaces/poke-response.interface';
// import { CreateSeedDto } from './dto/create-seed.dto';
// import { UpdateSeedDto } from './dto/update-seed.dto';

@Injectable()
export class SeedService {

  private readonly axios: AxiosInstance = axios;
  async executeSeed() {
    const {data} = await this.axios.get<PokeApi>('http://pokeapi.co/api/v2/pokemon?limit=650')
    // const l = "http://pokeapi.co/api/v2/"
    const l = "https://pokeapi.co/api/v2/pokemon/1/"
    const lon = l.split("/");
    return lon[lon.length-2]
  }

}
