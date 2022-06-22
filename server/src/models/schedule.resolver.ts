import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { ScheduleService } from "./schedule.service";
import {
  CreateScheduleInput,
  DeleteScheduleInput,
  Schedule,
} from "../schemas/schedule.schema";

@Resolver("Schedule")
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}

  @Query(() => [Schedule])
  async getAllSchedule() {
    return await this.scheduleService.findAll();
  }

  @Mutation(() => CreateScheduleInput)
  async addSchedule(@Args("schedule") schedule: CreateScheduleInput) {
    return await this.scheduleService.addSchedule(schedule);
  }

  @Mutation(() => DeleteScheduleInput)
  async deleteSchedule(@Args("schedule") schedule: DeleteScheduleInput) {
    return await this.scheduleService.deleteSchedule(schedule);
  }
}
