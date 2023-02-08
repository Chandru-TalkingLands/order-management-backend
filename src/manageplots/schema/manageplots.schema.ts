import { Schema,Prop ,SchemaFactory} from "@nestjs/mongoose";

export type PlotDocument = Plots & Document;

@Schema()
export class Plots{
    @Prop({required:true})
    title:string

    @Prop({required:true})
    image:string

    @Prop({required:true})
    price:string

    @Prop({required:true})
    place:string

    @Prop({required:true})
    status:string

    @Prop({required:true})
    area:string

    @Prop({required:true})
    facing:string

    @Prop()
    amount:number
}

export const PlotSchema = SchemaFactory.createForClass(Plots)