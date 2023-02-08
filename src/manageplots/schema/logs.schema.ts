import { Schema,Prop ,SchemaFactory} from "@nestjs/mongoose";

export type PlotDocument = logs & Document;

@Schema()
export class logs{
    @Prop({required:true})
    plotId:string

    @Prop({required:true})
    status:string

    @Prop()
    date:Date

    @Prop()
    info:string

    
}

export const LogsSchema = SchemaFactory.createForClass(logs)