import { Body, Controller, Post } from "@nestjs/common";
import { Get, Param, Patch } from "@nestjs/common/decorators";
import { PlotService } from "./manageplots.service";

@Controller('plots')
export class PlotController{

    constructor(private plotService:PlotService){}

    @Post()
    async addPlotDetails(
        @Body('title') title:string,
        @Body('image') image:string,
        @Body('price') price:number,
        @Body('place') place:string,
        @Body('status') status:string,
        @Body('area') area:string,
        @Body('facing') facing:string,
    ){
       const details = this.plotService.inserPlotDetails(title,image,price,place,status,area,facing);
       return details           
    }

    @Get()
    async getAllPlots(){
        return await this.plotService.getAllplots()
    }

    @Patch(":id")
    async updateStatus(@Param('id') plotId:any,@Body('status') status:string , @Body('amount') amount:number){
        return this.plotService.updatePlotInfo(plotId,status,amount)
    }

    @Get('logs/:id')
    async getPlotLogs(@Param('id') plotId:any){
       return await this.plotService.getplotLogDeatail(plotId)
    }

}