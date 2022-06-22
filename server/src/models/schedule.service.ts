import { Model } from "mongoose";
import { Injectable, Inject } from "@nestjs/common";
import {
  Schedule,
  CreateScheduleInput,
  DeleteScheduleInput,
} from "../schemas/schedule.schema";
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
      password: schedule.password,
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

  async deleteSchedule(schedule: DeleteScheduleInput): Promise<string> {
    const { _id, date, password } = schedule;

    console.log(schedule);
    const { participants } = await this.scheduleModel.findOne({ date });

    for (let i = 0; i < participants.length; i++) {
      console.log(participants[i]._id.toString(), _id);
      if (participants[i]._id.toString() === _id) {
        if (participants[i].password === password) {
          await this.scheduleModel.findOneAndUpdate(
            { date },
            {
              participants: participants.filter((part) => {
                return part._id.toString() !== _id;
              }),
            }
          );
          return "Success";
        }
      }
    }

    return "Failed";
  }
}
