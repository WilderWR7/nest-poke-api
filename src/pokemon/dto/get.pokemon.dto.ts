import { IsInt, IsNumber, IsOptional, IsPositive, Max, Min } from "class-validator";

export class GetPokemon {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Max(650)
    limit?: number;
    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(650)
    @IsPositive()
    offset?: number;
}