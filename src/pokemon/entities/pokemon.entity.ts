import { Document } from "mongoose";
import { Prop, Schema,SchemaFactory } from "@nestjs/mongoose/dist";

@Schema()
export class Pokemon extends Document {
    // id:string mongo lo proporciona
    @Prop({
        unique:true,
        index: true
    })
    name: string;
    @Prop({
        unique:true,
        index: true
    })
    nro: number;
}


export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
