import { IsNumber,Min,IsPositive,IsString,MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsNumber()
    @Min(1)
    @IsPositive()
    readonly nro: number;
    @IsString()
    @MinLength(1)
    name: string
}
