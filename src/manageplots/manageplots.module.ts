import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'; 
import { PlotController } from "./manageplots.controller";
import { PlotService } from "./manageplots.service";
import { LogsSchema } from "./schema/logs.schema";
import { PlotSchema } from "./schema/manageplots.schema";


@Module({
    imports:[MongooseModule.forFeature([{name:'plots',schema:PlotSchema},{name:'logs',schema:LogsSchema}])],
    controllers:[PlotController],
    providers:[PlotService],
})

export class PlotModule {}
