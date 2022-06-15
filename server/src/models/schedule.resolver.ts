import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Schedule } from 'src/schemas/schedule.schema';
import { ScheduleService } from './schedule.service';
import { CreateScheduleInput } from '../schemas/schedule.schema';

@Resolver('Schedule')
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}

  @Query(()=>[Schedule])
  async getAllSchedule() {
    return await this.scheduleService.findAll();
  }

  @Mutation(() => CreateScheduleInput)
  async addSchedule(@Args('schedule') schedule: CreateScheduleInput){
    return await this.scheduleService.addSchedule(schedule);
  }
}
