import { Injectable } from "@nestjs/common";
import {InjectModel} from '@nestjs/mongoose'
import { Model } from "mongoose";
import { PlotLogs, PlotsDto } from "./dto/manageplots.dto";

@Injectable()
export class PlotService{

    constructor(@InjectModel('plots') private plotModel:Model<PlotsDto>,@InjectModel('logs') private logsModel:Model<PlotLogs> ){}

    async inserPlotDetails(title:string,
        image:string,
        price:number,
        place:string,
        status:string,
        area:string,
        facing:string){

        const newDetails = new this.plotModel({
            title,image,price,place,status,area,facing
        })
        await newDetails.save()
        return {message:'Added Plot'}

    }
    async getAllplots(){
        return await this.plotModel.find()
    }

   async updatePlotInfo(id:any,status:string,amount:number){
        const plotDetails = await this.plotModel.findById(id)
        const currentplotStatus = plotDetails.status
        const updatePlot = await this.plotModel.findByIdAndUpdate({_id:id},{status:status,amount:amount})
        const updatedplotStatus = status
        this.createPlotLogDetails(id,currentplotStatus,updatedplotStatus)
        return {message:'Update Status'}
   }

   async createPlotLogDetails(id:any,currentplotStatus:string,updatedplotStatus:string){
      const data = new this.logsModel({
        plotId:id,
        status:currentplotStatus,
        date:new Date(),
        info:`At ${new Date().toUTCString()} Plot has been changed from ${currentplotStatus} to ${updatedplotStatus} `
      })
      await data.save()
   }

   async getplotLogDeatail(id:any){
     const details = await this.logsModel.find()
     const filteredDetail = details.filter(d =>{
        return d.plotId == id
     })
     return {data:filteredDetail}

   }


    
}