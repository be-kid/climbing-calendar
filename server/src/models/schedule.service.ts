import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { Schedule } from "../schemas/schedule.schema";
@Injectable()
export class ScheduleService {
    constructor(
        @Inject("SCHEDULE_MODEL")
        private scheduleModel: Model<Schedule>
    ) {}

    async findAll(): Promise<Schedule[]> {
        return await this.scheduleModel.find().exec();
    }
}