import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import { Schedule, CreateScheduleInput } from "../schemas/schedule.schema";
@Injectable()
export class ScheduleService {
  constructor(
    @Inject("SCHEDULE_MODEL")
    private scheduleModel: Model<Schedule>
  ) {}

  async findAll(): Promise<Schedule[]> {
    return await this.scheduleModel.find().exec();
  }

  async addSchedule(schedule: CreateScheduleInput): Promise<string> {
    const participant = {
      name: schedule.name,
      branch: schedule.branch,
      time: schedule.time,
      password: schedule.time,
    };
    const oldSchedule = await this.scheduleModel.findOne({
      date: schedule.date,
    });
    if (oldSchedule) {
      await this.scheduleModel.findOneAndUpdate(
        { date: schedule.date },
        { participants: [...oldSchedule.participants, participant] }
      );
    } else {
      await this.scheduleModel.create({
        date: schedule.date,
        participants: [participant],
      });
    }
    return "Success";
  }
}
